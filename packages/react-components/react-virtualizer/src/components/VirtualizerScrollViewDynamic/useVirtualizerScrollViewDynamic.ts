import * as React from 'react';
import { resolveShorthand } from '@fluentui/react-utilities';
import { useVirtualizer_unstable } from '../Virtualizer/useVirtualizer';
import {
  VirtualizerScrollViewDynamicProps,
  VirtualizerScrollViewDynamicState,
} from './VirtualizerScrollViewDynamic.types';
import { useDynamicVirtualizerMeasure } from '../../Hooks';
import { useVirtualizerContext } from '../../Utilities';

export function useVirtualizerScrollViewDynamic_unstable(
  props: VirtualizerScrollViewDynamicProps,
): VirtualizerScrollViewDynamicState {
  const { contextIndex } = useVirtualizerContext();
  const { virtualizerLength, bufferItems, bufferSize, scrollRef } = useDynamicVirtualizerMeasure({
    defaultItemSize: props.itemSize,
    direction: props.axis ?? 'vertical',
    getItemSize: props.getItemSize,
    currentIndex: contextIndex,
    numItems: 0,
  });

  const iScrollRef = React.useRef<HTMLElement | null>(null);

  const setScrollRef = React.useCallback(
    (element: HTMLDivElement) => {
      if (iScrollRef.current === element) {
        return;
      }
      scrollRef(element);
      iScrollRef.current = element;
    },
    [scrollRef],
  );

  const virtualizerState = useVirtualizer_unstable({
    ...props,
    virtualizerLength,
    bufferItems,
    bufferSize,
    scrollViewRef: iScrollRef,
  });

  return {
    ...virtualizerState,
    components: {
      ...virtualizerState.components,
      container: 'div',
    },
    container: resolveShorthand(props.container, {
      required: true,
      defaultProps: {
        ref: setScrollRef,
      },
    }),
  };
}
