import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import {
  VirtualizerScrollViewDynamicProps,
  VirtualizerScrollViewDynamicSlots,
  VirtualizerScrollViewDynamicState,
} from './VirtualizerScrollViewDynamic.types';
import { VirtualizerContext, VirtualizerContextProps } from '../../Utilities';
import { IVirtualizerScrollViewDynamic } from './VirtualizerScrollViewDynamic';

export const renderIVirtualizerScrollViewDynamic_unstable = (state: VirtualizerScrollViewDynamicState) => {
  const { slots, slotProps } = getSlots<VirtualizerScrollViewDynamicSlots>(state);

  return (
    <slots.container {...slotProps.container}>
      {/* The 'before' bookend to hold items in place and detect scroll previous */}
      <slots.beforeContainer {...slotProps.beforeContainer}>
        <slots.before {...slotProps.before} />
      </slots.beforeContainer>
      {/* The reduced list of non-virtualized children to be rendered */}
      {state.virtualizedChildren}
      {/* The 'after' bookend to hold items in place and detect scroll next */}
      <slots.afterContainer {...slotProps.afterContainer}>
        <slots.after {...slotProps.after} />
      </slots.afterContainer>
    </slots.container>
  );
};

export const renderVirtualizerScrollViewDynamic_unstable = (
  props: VirtualizerScrollViewDynamicProps,
  context: VirtualizerContextProps,
) => {
  return (
    <VirtualizerContext.Provider value={context}>
      <IVirtualizerScrollViewDynamic {...props} />
    </VirtualizerContext.Provider>
  );
};
