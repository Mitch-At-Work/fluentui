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
    coreProperties: ['strokewidth'],
    variants: ['neutral', 'primary', 'outline', 'subtle', 'transparent'],
    variantProperties: ['shadow'],
    variantStateProperties: ['background', 'stroke'],
    scales: ['small', 'medium', 'large'],
    scaleProperties: ['padding.horizontal', 'padding.vertical', 'gap', 'borderradius', 'minwidth'],
    states: ['rest', 'hover', 'pressed', 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
    components: ['button'],
    parts: {
      icon: {
        states: ['rest', 'hover', 'pressed', 'disabled'],
        scales: ['small', 'medium', 'large'],
        scaleProperties: ['size'],
        variants: ['neutral', 'primary', 'outline', 'subtle', 'transparent'],
        variantStateProperties: ['foreground'],
      },
      divider: {
        variants: ['neutral', 'primary', 'outline', 'subtle', 'transparent'],
        variantProperties: ['color'],
      },
      text: {
        coreProperties: ['fontfamily'],
        scales: ['small', 'medium', 'large'],
        states: ['rest', 'hover', 'pressed', 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
        variants: ['neutral', 'primary', 'outline', 'subtle', 'transparent'],
        variantStateProperties: ['foreground'],
        scaleProperties: ['padding.horizontal', 'fontsize', 'lineheight', 'fontweight'],
      },
      'text.secondary': {
        states: ['rest', 'hover', 'pressed', 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
        variants: ['neutral', 'primary', 'outline', 'subtle', 'transparent'],
        variantStateProperties: ['foreground'],
      },
    },
  },
};
