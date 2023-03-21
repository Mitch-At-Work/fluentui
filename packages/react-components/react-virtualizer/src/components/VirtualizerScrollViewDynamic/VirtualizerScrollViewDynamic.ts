import { VirtualizerScrollViewDynamicProps } from './VirtualizerScrollViewDynamic.types';
import { useVirtualizerScrollViewDynamic_unstable } from './useVirtualizerScrollViewDynamic';
import {
  renderIVirtualizerScrollViewDynamic_unstable,
  renderVirtualizerScrollViewDynamic_unstable,
} from './renderVirtualizerScrollViewDynamic';
import { useVirtualizerScrollViewDynamicStyles_unstable } from './useVirtualizerScrollViewDynamicStyles';
import * as React from 'react';
import { useVirtualizerContextState, VirtualizerContextProps } from '../../Utilities';

/**
 * Virtualizer ScrollView
 */

export const IVirtualizerScrollViewDynamic: React.FC<VirtualizerScrollViewDynamicProps> = (
  props: VirtualizerScrollViewDynamicProps,
  context: React.Context<VirtualizerContextProps>,
) => {
  const state = useVirtualizerScrollViewDynamic_unstable(props);

  useVirtualizerScrollViewDynamicStyles_unstable(state);

  return renderIVirtualizerScrollViewDynamic_unstable(state);
};

IVirtualizerScrollViewDynamic.displayName = 'IVirtualizerScrollViewDynamic';

export const VirtualizerScrollViewDynamic: React.FC<VirtualizerScrollViewDynamicProps> = (
  props: VirtualizerScrollViewDynamicProps,
) => {
  const context = useVirtualizerContextState();
  return renderVirtualizerScrollViewDynamic_unstable(props, context);
};

VirtualizerScrollViewDynamic.displayName = 'VirtualizerScrollViewDynamic';
