import * as React from 'react';
import type { VirtualizerContextProps } from './types';

const VirtualizerContext = React.createContext<VirtualizerContextProps | undefined>(
  undefined,
) as React.Context<VirtualizerContextProps>;

export const VirtualizerContextProvider = VirtualizerContext.Provider;

export const useVirtualizerContext = () => {
  return React.useContext(VirtualizerContext);
};

export const useVirtualizerContextState = (): VirtualizerContextProps => {
  const [contextIndex, setContextIndex] = React.useState<number>(0);
  return { contextIndex, setContextIndex };
};
