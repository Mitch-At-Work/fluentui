import { states } from './primitives.js';
import { scaleProperties, variantProperties, coreProperties } from './generics.js';

export const groups = {
  button: {
    coreProperties: [...coreProperties],
    variants: ['secondary', 'primary', 'outline', 'subtle', 'transparent'],
    variantProperties: [...variantProperties, 'shadow', 'divider'],
    scales: ['small', 'base', 'large'],
    scaleProperties: [...scaleProperties, 'fontweight'],
    states: [...states, 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
    components: ['button'],
  },
};
