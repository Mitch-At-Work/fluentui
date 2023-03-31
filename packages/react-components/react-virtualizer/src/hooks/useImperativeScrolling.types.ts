import { MutableRefObject, RefObject } from 'react';

export type VirtualizerScrollCallbacks = {
  scrollToItem: MutableRefObject<((index: number) => void) | undefined>;
  didScrollToItem: MutableRefObject<((index: number) => void) | undefined>;
};

export type ScrollToItemStatic = {
  index: number;
  itemSize: number;
  totalItems: number;
  scrollView: RefObject<HTMLDivElement>;
  axis?: 'horizontal' | 'vertical';
  reversed?: boolean;
  indexToNotify: MutableRefObject<number>;
};
