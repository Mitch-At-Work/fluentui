// Definitions of component groups, their properties, variants, states, scales, and parts
export interface GroupPart {
  coreProperties?: string[];
  variantStateProperties?: string[];
  variantProperties?: string[];
  scales?: string[];
  scaleProperties?: string[];
  variants?: string[];
  states?: string[];
  parts?: { [key: string]: GroupPart };
  components?: string[];
}

export interface Groups {
  [key: string]: GroupPart;
}

export const groups: Groups = {
  button: {
    coreProperties: ['fontfamily'],
    variants: ['default', 'primary', 'outline', 'subtle', 'transparent'],
    variantProperties: ['shadow'],
    variantStateProperties: ['background', 'stroke'],
    scales: ['small', 'base', 'large'],
    scaleProperties: [
      'fontsize',
      'lineheight',
      'padding.horizontal',
      'padding.vertical',
      'gap',
      'borderradius',
      'minwidth',
      'strokewidth',
      'fontweight',
      'fontweight.selected',
      'strokewidth.selected',
    ],
    states: ['rest', 'hover', 'pressed', 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
    components: ['button'],
    parts: {
      icon: {
        scales: ['small', 'base', 'large'],
        scaleProperties: ['size'],
      },
      divider: {
        variants: ['default', 'primary', 'outline', 'subtle', 'transparent'],
        variantProperties: ['color'],
      },
      text: {
        states: ['rest', 'hover', 'pressed', 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
        variants: ['default', 'primary', 'outline', 'subtle', 'transparent'],
        variantStateProperties: ['foreground'],
        scaleProperties: ['padding.horizontal', 'padding.vertical'],
      },
      'text.secondary': {
        states: ['rest', 'hover', 'pressed', 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
        variants: ['default', 'primary', 'outline', 'subtle', 'transparent'],
        variantStateProperties: ['foreground'],
      },
    },
  },
};
