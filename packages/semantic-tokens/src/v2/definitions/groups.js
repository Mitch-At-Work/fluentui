import { states } from './primitives.js';
import { scaleProperties, variantStateProperties, coreProperties } from './generics.js';

export const groups = {
  button: {
    coreProperties: [...coreProperties],
    variants: ['secondary', 'primary', 'outline', 'subtle', 'transparent'],
    variantProperties: ['shadow', 'stroke'],
    variantStateProperties: [...variantStateProperties],
    scales: ['small', 'default', 'large'],
    scaleProperties: [...scaleProperties, 'fontweight', 'fontweight.selected', 'strokewidth.selected'],
    states: [...states, 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
    components: ['button'],
    parts: {
      icon: {
        scales: ['small', 'default', 'large'],
        scaleProperties: ['size'],
      },
      divider: {
        variants: ['secondary', 'primary', 'outline', 'subtle', 'transparent'],
        variantProperties: ['color'],
      },
    },
  },
};
