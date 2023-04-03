import { MutableRefObject } from 'react';

/**
 * {@docCategory Virtualizer}
 */
export type VirtualizerContextProps = {
  contextIndex: number;
  setContextIndex: (index: number) => void;
  currentChildSizes?: MutableRefObject<number[]>;
  totalSize?: MutableRefObject<number>;
};
