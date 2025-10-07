import { states } from './primitives';
// Each group of components will have these properties at default
// These properties have NO states and NO variants
export const coreProperties = ['fontfamily'];

// Each variant of a component will have these properties at default
// States will be appended here, i.e. rest, hover, pressed, disabled
export const variantStateProperties = ['background', 'foreground'];

// Scales affect different properties than variants
// These properties will be appended to the scale, i.e. small, base, large
export const scaleProperties = ['fontsize', 'lineheight', 'padding', 'gap', 'corner', 'size', 'strokewidth'];

// Properties are generic tokens
export type GenericTypes = {
  [key: string]: {
    type: 'color' | 'dimension' | 'weight' | 'string';
    variants: string[];
    states?: string[];
    styles?: string[];
  };
};

export const generics: GenericTypes = {
  background: {
    type: 'color',
    variants: ['brand', 'neutral', 'status'],
    states: [...states, 'disabled'],
  },
  corner: {
    type: 'dimension',
    variants: ['default', 'circular', 'rounded', 'zero'],
    states: [''],
    styles: [''],
  },
  'focus.stroke': {
    type: 'color',
    variants: ['outer', 'inner'],
    states: [''],
    styles: [''],
  },
  'focus.strokewidth': {
    type: 'dimension',
    variants: ['outer', 'inner'],
    states: [''],
    styles: [''],
  },
  strokewidth: {
    type: 'dimension',
    variants: ['thin', 'thick', 'thicker', 'regular'],
    states: [''],
    styles: [''],
  },
  stroke: {
    type: 'color',
    variants: ['brand', 'neutral', 'status'],
  },
  foreground: {
    type: 'color',
    variants: ['brand', 'neutral', 'status'],
    states: [...states, 'disabled'],
  },
  fontsize: {
    type: 'dimension',
    variants: [
      'display1',
      'display2',
      'title1',
      'title2',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'body3',
      'caption1',
      'caption2',
    ],
  },
  lineheight: {
    type: 'dimension',
    variants: [
      'display1',
      'display2',
      'title1',
      'title2',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'body3',
      'caption1',
      'caption2',
    ],
  },
  fontWeight: {
    type: 'weight',
    variants: ['regular', 'header', 'display', 'regular.selected'],
  },
};
