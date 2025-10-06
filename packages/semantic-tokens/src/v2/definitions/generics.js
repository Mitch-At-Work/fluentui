import { primitiveStyles, states } from './primitives.js';
// Each group of components will have these properties at default
// These properties have NO states and NO variants
export const coreProperties = ['fontfamily'];

// Each variant of a component will have these properties at default
// States will be appended here, i.e. rest, hover, pressed, disabled
export const variantProperties = ['background', 'foreground', 'stroke'];

// Scales affect different properties than variants
// These properties will be appended to the scale, i.e. small, base, large
export const scaleProperties = ['fontsize', 'lineheight', 'padding', 'gap', 'corner', 'size', 'strokewidth'];

// Properties are generic tokens
export const generics = {
  background: {
    type: 'color',
    variants: ['brand', 'neutral', 'status'],
    states: [...states, 'disabled'],
    styles: primitiveStyles,
    color: 'DarkBlue',
  },
  corner: {
    type: 'dimension',
    variants: ['default', 'circular', 'rounded', 'zero'],
    states: [''],
    styles: [''],
    color: 'MidnightBlue',
  },
  'focus.stroke': {
    type: 'color',
    variants: ['outer', 'inner'],
    states: [''],
    styles: [''],
    color: 'DarkBlue',
  },
  'focus.strokewidth': {
    type: 'dimension',
    variants: ['outer', 'inner'],
    states: [''],
    styles: [''],
    color: 'DarkBlue',
  },
};
