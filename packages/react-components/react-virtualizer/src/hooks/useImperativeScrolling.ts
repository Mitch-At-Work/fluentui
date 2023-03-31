import { ScrollToItemStatic, VirtualizerScrollCallbacks } from './useImperativeScrolling.types';
import { RefObject, useRef } from 'react';

export const useImperativeScrolling = (): VirtualizerScrollCallbacks => {
  // The virtualizer scroll container will override this function for the user to call
  const scrollToItem = useRef<(index: number) => void>();
  // The user will override this function for the virtualizer scroll container to call
  const didScrollToItem = useRef<(index: number) => void>();

  return {
    scrollToItem,
    didScrollToItem,
  };
};

export const _scrollToItemStatic = (params: ScrollToItemStatic) => {
  const { index, itemSize, totalItems, scrollView, axis = 'vertical', reversed = false, indexToNotify } = params;

  // We store the index in a ref for scrollView to handle once it is detected.
  indexToNotify.current = index;

  if (axis === 'horizontal') {
    if (reversed) {
      scrollView.current?.scrollTo({
        left: totalItems * itemSize - itemSize * index,
        behavior: 'smooth',
      });
    } else {
      scrollView.current?.scrollTo({
        left: itemSize * index,
        behavior: 'smooth',
      });
    }
  } else {
    if (reversed) {
      scrollView.current?.scrollTo({
        top: totalItems * itemSize - itemSize * index,
        behavior: 'smooth',
      });
    } else {
      scrollView.current?.scrollTo({
        top: itemSize * index,
        behavior: 'smooth',
      });
    }
  }

  return;
};

export const _scrollToItemDynamic = (
  index: number,
  progressiveItemSizes: number[],
  scrollView: RefObject<HTMLDivElement>,
) => {
  return;
};
