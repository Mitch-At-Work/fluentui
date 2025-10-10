import { tokens } from '@fluentui/tokens';

export type GenericFallbacks = {
  [key: string]: {
    fluent?: string;
    primitive?: string;
  };
};

export const genericFallbacks: GenericFallbacks = {
  focusStrokeInner: {
    fluent: tokens.colorStrokeFocus2,
  },
  focusStrokeOuter: {
    fluent: tokens.colorTransparentStroke,
  },
  focusStrokewidthInner: {
    fluent: tokens.strokeWidthThin,
  },
  focusStrokewidthOuter: {
    fluent: tokens.strokeWidthThick,
  },
  borderRadiusCircular: {
    fluent: tokens.borderRadiusCircular,
  },
  borderRadiusSquare: {
    fluent: tokens.borderRadiusNone,
  },
  focusStrokeOnbrandHover: {
    fluent: tokens.colorStrokeFocus2,
  },
  focusStrokeOnbrandRest: {
    fluent: tokens.colorNeutralForegroundOnBrand,
  },
};
