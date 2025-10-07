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
  fontsize: {
    type: 'dimension',
    states: ['small', 'medium', 'large'],
    styles: [''],
  },
  fontweight: {
    type: 'weight',
    states: ['thin', 'regular', 'bold'],
    styles: [''],
  },
  lineheight: {
    type: 'dimension',
    states: ['small', 'medium', 'large'],
    styles: [''],
  },
  padding: {
    type: 'dimension',
    states: ['small', 'medium', 'large'],
    styles: [''],
  },
  gap: {
    type: 'dimension',
    states: ['small', 'medium', 'large'],
    styles: [''],
  },
  size: {
    type: 'dimension',
    states: ['small', 'medium', 'large'],
    styles: [''],
  },
};
