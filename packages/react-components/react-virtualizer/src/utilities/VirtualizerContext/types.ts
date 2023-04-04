import { MutableRefObject } from 'react';

/**
 * {@docCategory Virtualizer}
 */
export type VirtualizerContextProps = {
  contextIndex: number;
  setContextIndex: (index: number) => void;
  totalSize?: MutableRefObject<number>;

  /*
   * Virtualizer's current item sizes - external hooks can track/update.
   * Users can update sizing at any time to handle dynamic updates.
   */
  currentChildSizes?: MutableRefObject<number[]>;
  /*
   * Virtualizer's current progressive sizes.
   *
   * Updating these in-sync instead of waiting for Virtualizer to catch a mismatch
   * will ensure accuracy from any external currentChildSizes updates.
   */
  progressiveChildSizes?: MutableRefObject<number[]>;
};
