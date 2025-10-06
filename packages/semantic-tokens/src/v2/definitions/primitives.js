export const primitiveStyles = ['loud', 'tint', 'subtle', 'transparent'];
export const states = ['rest', 'hover', 'pressed'];

export const primitives = {
  brand: {
    styles: primitiveStyles,
    states: [...states, 'selected'],
    type: 'color',
  },
  neutral: {
    styles: primitiveStyles,
    states: [...states, 'selected'],
    type: 'color',
  },
  status: {
    styles: primitiveStyles,
    states: [...states, 'selected'],
    type: 'color',
  },
};
