export type VirtualizerMeasureProps = {
  defaultItemSize: number;
  direction?: 'vertical' | 'horizontal';
};

export type VirtualizerMeasureDynamicProps = {
  defaultItemSize: number;
  currentIndex: number;
  numItems: number;
  getItemSize: (index: number) => number;
  direction?: 'vertical' | 'horizontal';
};
