import * as React from 'react';
import { resolveShorthand, useMergedRefs } from '@fluentui/react-utilities';
import { useVirtualizer_unstable } from '../Virtualizer/useVirtualizer';
import { VirtualizerScrollViewProps, VirtualizerScrollViewState } from './VirtualizerScrollView.types';
import { useStaticVirtualizerMeasure } from '../../Hooks';
import { FlaggedIndexCallback } from '../Virtualizer/Virtualizer.types';
import { _scrollToItemStatic } from '../../hooks/useImperativeScrolling';

export function useVirtualizerScrollView_unstable(props: VirtualizerScrollViewProps): VirtualizerScrollViewState {
  const { virtualizerLength, bufferItems, bufferSize, scrollRef } = useStaticVirtualizerMeasure({
    defaultItemSize: props.itemSize,
    direction: props.axis ?? 'vertical',
  });

  const iScrollRef = useMergedRefs(React.useRef<HTMLDivElement>(null), scrollRef) as React.RefObject<HTMLDivElement>;

  const scrollCallbackIndex = React.useRef<number | null>(null);

  React.useEffect(() => {
    const { itemSize, numItems, axis = 'vertical', reversed } = props;
    if (props.scrollCallbacks) {
      props.scrollCallbacks.scrollToItem.current = (index: number) => {
        scrollCallbackIndex.current = index;
        _scrollToItemStatic({
          indexRef: scrollCallbackIndex,
          itemSize,
          totalItems: numItems,
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
    flagIndex: props.scrollCallbacks
      ? ({
          flaggedIndex: scrollCallbackIndex,
          onRenderedFlaggedIndex: props.scrollCallbacks.didScrollToItem.current,
        } as FlaggedIndexCallback)
      : undefined,
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
