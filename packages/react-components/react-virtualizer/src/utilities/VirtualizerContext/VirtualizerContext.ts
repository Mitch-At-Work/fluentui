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
  const currentChildSizes = React.useRef<number[]>([]);
  const progressiveChildSizes = React.useRef<number[]>([]);
  const totalSize = React.useRef<number>(0);
  return { contextIndex, setContextIndex, currentChildSizes, totalSize, progressiveChildSizes };
};
