import { ScrollToItemDynamic, ScrollToItemStatic, VirtualizerScrollCallbacks } from './useImperativeScrolling.types';
import { useRef } from 'react';

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
  const { indexRef, itemSize, totalItems, scrollView, axis = 'vertical', reversed = false } = params;

  if (indexRef.current === null) {
    // null check - abort
    return;
  }

  // We store the index in a ref for scrollView to handle once it is detected.
  if (axis === 'horizontal') {
    if (reversed) {
      scrollView.current?.scrollTo({
        left: totalItems * itemSize - itemSize * indexRef.current,
        behavior: 'auto',
      });
    } else {
      scrollView.current?.scrollTo({
        left: itemSize * indexRef.current,
        behavior: 'auto',
      });
    }
  } else {
    if (reversed) {
      scrollView.current?.scrollTo({
        top: totalItems * itemSize - itemSize * indexRef.current,
        behavior: 'auto',
      });
    } else {
      scrollView.current?.scrollTo({
        top: itemSize * indexRef.current,
        behavior: 'auto',
      });
    }
  }
};

export const _scrollToItemDynamic = (params: ScrollToItemDynamic) => {
  const { currentIndex, indexRef, itemSizes, scrollView, axis = 'vertical', reversed = false } = params;

  if (!itemSizes.current) {
    return;
  }
  console.log('Current index:', currentIndex);

  if (indexRef.current === null || itemSizes.current === null || itemSizes.current.length < indexRef.current) {
    // null check - abort
    console.log('ABORTING');
    console.log('indexRef.current:', indexRef.current);
    console.log('itemSizes.current:', itemSizes.current);
    console.log('itemSizes.current.length:', itemSizes.current.length);
    return;
  }

  let itemDepth = 0;
  let totalSize = 0;
  const trackTill = reversed ? itemSizes.current.length : indexRef.current;
  for (let i = 0; i < trackTill; i++) {
    if (i < indexRef.current) {
      itemDepth += itemSizes.current[i];
    }
    totalSize += itemSizes.current[i];
  }

  // We store the index in a ref for scrollView to handle once it is detected.
  if (axis === 'horizontal') {
    if (reversed) {
      scrollView.current?.scrollTo({
        left: totalSize - itemDepth,
        behavior: 'auto',
      });
    } else {
      scrollView.current?.scrollTo({
        left: itemDepth,
        behavior: 'auto',
      });
    }
  } else {
    if (reversed) {
      scrollView.current?.scrollTo({
        top: totalSize - itemDepth,
        behavior: 'auto',
      });
    } else {
      scrollView.current?.scrollTo({
        top: itemDepth,
        behavior: 'auto',
      });
    }
  }
};
