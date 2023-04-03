import * as React from 'react';
import { canUseDOM } from '@fluentui/react-utilities';
import { VirtualizerMeasureDynamicProps, VirtualizerMeasureProps } from './useVirtualizerMeasure.types';
import { debounce } from '../utilities/debounce';

/**
 * React hook that measures virtualized space based on a static size to ensure optimized virtualization length.
 */
export const useStaticVirtualizerMeasure = (
  virtualizerProps: VirtualizerMeasureProps,
): {
  virtualizerLength: number;
  bufferItems: number;
  bufferSize: number;
  scrollRef: (instance: HTMLElement | HTMLDivElement | null) => void;
} => {
  const { defaultItemSize, direction = 'vertical' } = virtualizerProps;

  const [state, setState] = React.useState({
    virtualizerLength: 0,
    bufferSize: 0,
    bufferItems: 0,
  });

  const { virtualizerLength, bufferItems, bufferSize } = state;

  // The ref the user sets on their scrollView
  const container = React.useRef<HTMLElement | null>(null);

  const resizeCallback = () => {
    if (!container.current) {
      return;
    }

    const containerSize =
      direction === 'vertical'
        ? container.current.getBoundingClientRect().height
        : container.current.getBoundingClientRect().width;

    /*
     * Number of items required to cover viewport.
     */
    const length = Math.ceil(containerSize / defaultItemSize + 1);

    /*
     * Number of items to append at each end, i.e. 'preload' each side before entering view.
     */
    const newBufferItems = Math.max(Math.floor(length / 4), 2);

    /*
     * This is how far we deviate into the bufferItems to detect a redraw.
     */
    const newBufferSize = Math.max(Math.floor((length / 8) * defaultItemSize), 1);

    const totalLength = length + newBufferItems * 2 + 1;

    setState({
      virtualizerLength: totalLength,
      bufferItems: newBufferItems,
      bufferSize: newBufferSize,
    });
  };

  // the handler for resize observer
  const handleResize = debounce(resizeCallback);

  // Keep the reference of ResizeObserver in the state, as it should live through renders
  const [resizeObserver] = React.useState(canUseDOM() ? new ResizeObserver(handleResize) : undefined);

  React.useEffect(() => {
    return () => {
      resizeObserver?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollRef = React.useCallback(
    (el: HTMLElement | null) => {
      if (container.current !== el) {
        if (container.current) {
          resizeObserver?.unobserve(container.current);
        }

        container.current = el;
        if (container.current) {
          resizeObserver?.observe(container.current);
        }
      }
    },
    [resizeObserver],
  );

  return {
    virtualizerLength,
    bufferItems,
    bufferSize,
    scrollRef,
  };
};

/**
 * React hook that measures virtualized space dynamically to ensure optimized virtualization length.
 */
export const useDynamicVirtualizerMeasure = (
  virtualizerProps: VirtualizerMeasureDynamicProps,
): {
  virtualizerLength: number;
  bufferItems: number;
  bufferSize: number;
  scrollRef: (instance: HTMLElement | HTMLDivElement | null) => void;
  sizingArray: React.RefObject<number[]>;
} => {
  const { defaultItemSize, direction = 'vertical', numItems, getItemSize, currentIndex } = virtualizerProps;

  const sizeTracker = React.useRef<number[]>(new Array(numItems).fill(defaultItemSize));

  if (sizeTracker.current.length !== numItems) {
    // numItems changed, morph array - keep previously explored values.
    const newItems = numItems - sizeTracker.current.length;
    if (newItems > 0) {
      sizeTracker.current = [...sizeTracker.current, ...Array(newItems).fill(defaultItemSize)];
    } else if (numItems > 0) {
      sizeTracker.current.splice(numItems, newItems * -1);
    }
  }

  const [state, setState] = React.useState({
    virtualizerLength: 0,
    virtualizerBufferItems: 0,
    virtualizerBufferSize: 0,
  });

  const { virtualizerLength, virtualizerBufferItems, virtualizerBufferSize } = state;

  const container = React.useRef<HTMLElement | null>(null);

  const resizeCallback = () => {
    if (!container.current) {
      // Error? ignore?
      return;
    }

    const containerSize =
      direction === 'vertical'
        ? container.current?.getBoundingClientRect().height
        : container.current?.getBoundingClientRect().width;

    let indexSizer = 0;
    let length = 0;

    while (indexSizer <= containerSize) {
      const iItemSize = getItemSize(currentIndex + length);
      sizeTracker.current[currentIndex + length] = iItemSize;

      // Increment
      indexSizer += iItemSize;
      length++;
    }

    /*
     * Number of items to append at each end, i.e. 'preload' each side before entering view.
     */
    const bufferItems = Math.max(Math.floor(length / 4), 2);

    /*
     * This is how far we deviate into the bufferItems to detect a redraw.
     */
    const bufferSize = Math.max(Math.floor((length / 8) * defaultItemSize), 1);

    const totalLength = length + bufferItems * 2 + 3;

    setState({
      virtualizerLength: totalLength,
      virtualizerBufferSize: bufferSize,
      virtualizerBufferItems: bufferItems,
    });
  };

  // the handler for resize observer
  const handleResize = debounce(resizeCallback);

  // Keep the reference of ResizeObserver in the state, as it should live through renders
  const [resizeObserver] = React.useState(canUseDOM() ? new ResizeObserver(handleResize) : undefined);

  const scrollRef = React.useCallback(
    (el: HTMLElement | null) => {
      if (container.current !== el) {
        if (container.current) {
          resizeObserver?.unobserve(container.current);
        }

        container.current = el;
        if (container.current) {
          resizeObserver?.observe(container.current);
        }
      }
    },
    [resizeObserver],
  );

  if (container.current) {
    const containerSize =
      direction === 'vertical'
        ? container.current?.getBoundingClientRect().height * 1.5
        : container.current?.getBoundingClientRect().width * 1.5;

    let couldBeSmaller = false;
    let recheckTotal = 0;
    for (let i = currentIndex; i < currentIndex + virtualizerLength; i++) {
      const newItemSize = getItemSize(i);
      sizeTracker.current[i] = newItemSize;
      recheckTotal += newItemSize;

      const newLength = i - currentIndex;

      const bufferItems = Math.max(Math.floor(newLength / 4), 2);
      const totalNewLength = newLength + bufferItems * 2 + 4;
      const compareLengths = totalNewLength < virtualizerLength;

      if (recheckTotal > containerSize && compareLengths && !couldBeSmaller) {
        couldBeSmaller = true;
      }
    }

    // Check if the render has caused us to need a re-calc of virtualizer length
    if (recheckTotal < containerSize || couldBeSmaller) {
      handleResize();
    }
  }

  return {
    virtualizerLength,
    bufferItems: virtualizerBufferItems,
    bufferSize: virtualizerBufferSize,
    scrollRef,
    sizingArray: sizeTracker,
  };
};
