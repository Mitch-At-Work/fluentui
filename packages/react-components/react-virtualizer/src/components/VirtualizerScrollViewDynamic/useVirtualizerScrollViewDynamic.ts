import * as React from 'react';
import { resolveShorthand, useMergedRefs } from '@fluentui/react-utilities';
import { useVirtualizer_unstable } from '../Virtualizer/useVirtualizer';
import {
  VirtualizerScrollViewDynamicProps,
  VirtualizerScrollViewDynamicState,
} from './VirtualizerScrollViewDynamic.types';
import { useDynamicVirtualizerMeasure } from '../../Hooks';
import { useVirtualizerContext } from '../../Utilities';
import { _scrollToItemDynamic } from '../../hooks/useImperativeScrolling';

export function useVirtualizerScrollViewDynamic_unstable(
  props: VirtualizerScrollViewDynamicProps,
): VirtualizerScrollViewDynamicState {
  const { contextIndex } = useVirtualizerContext();
  const { virtualizerLength, bufferItems, bufferSize, scrollRef, sizingArray } = useDynamicVirtualizerMeasure({
    defaultItemSize: props.itemSize,
    direction: props.axis ?? 'vertical',
    getItemSize: props.getItemSize,
    currentIndex: contextIndex,
    numItems: props.numItems,
  });

  console.log('Sizing array:', sizingArray);

  const iScrollRef = useMergedRefs(React.useRef<HTMLDivElement>(null), scrollRef) as React.RefObject<HTMLDivElement>;

  const scrollCallbackIndex = React.useRef<number | null>(null);

  React.useEffect(() => {
    console.log('Setting value');
    const { axis = 'vertical', reversed } = props;
    if (props.scrollCallbacks) {
      console.log('Setting value - 2');
      props.scrollCallbacks.scrollToItem.current = (index: number) => {
        console.log('Calling value');
        scrollCallbackIndex.current = index;
        _scrollToItemDynamic({
          indexRef: scrollCallbackIndex,
          currentIndex: contextIndex,
          itemSizes: sizingArray,
          scrollView: iScrollRef,
          axis,
          reversed,
        });
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iScrollRef, props.scrollCallbacks]);

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
        ref: iScrollRef,
      },
    }),
  };
}
