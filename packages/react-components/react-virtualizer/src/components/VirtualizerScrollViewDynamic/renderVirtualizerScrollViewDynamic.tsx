import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import {
  VirtualizerScrollViewDynamicProps,
  VirtualizerScrollViewDynamicSlots,
  VirtualizerScrollViewDynamicState,
} from './VirtualizerScrollViewDynamic.types';
import { VirtualizerContextProvider, VirtualizerContextProps } from '../../Utilities';
import { ContextlessVirtualizerScrollViewDynamic } from './VirtualizerScrollViewDynamic';
import { renderVirtualizer_unstable } from '../Virtualizer/renderVirtualizer';

export const renderContextlessVirtualizerScrollViewDynamic_unstable = (state: VirtualizerScrollViewDynamicState) => {
  const { slots, slotProps } = getSlots<VirtualizerScrollViewDynamicSlots>(state);

  return <slots.container {...slotProps.container}>{renderVirtualizer_unstable(state)}</slots.container>;
};

export const renderVirtualizerScrollViewDynamic_unstable = (
  props: VirtualizerScrollViewDynamicProps,
  context: VirtualizerContextProps,
) => {
  return (
    <VirtualizerContextProvider value={context}>
      <ContextlessVirtualizerScrollViewDynamic {...props} />
    </VirtualizerContextProvider>
  );
};
