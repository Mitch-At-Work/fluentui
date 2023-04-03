import { MutableRefObject, RefObject } from 'react';

export type VirtualizerScrollCallbacks = {
  scrollToItem: MutableRefObject<((index: number) => void) | undefined>;
  didScrollToItem: MutableRefObject<((index: number) => void) | undefined>;
};

export type ScrollToItemStatic = {
  indexRef: MutableRefObject<number | null>;
  itemSize: number;
  totalItems: number;
  scrollView: RefObject<HTMLDivElement>;
  axis?: 'horizontal' | 'vertical';
  reversed?: boolean;
};

export type ScrollToItemDynamic = {
  indexRef: MutableRefObject<number | null>;
  itemSizes: RefObject<number[]>;
  scrollView: RefObject<HTMLDivElement>;
  axis?: 'horizontal' | 'vertical';
  reversed?: boolean;
};
