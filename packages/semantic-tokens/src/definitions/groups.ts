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
    variants: ['secondary', 'primary', 'outline', 'subtle', 'transparent'],
    variantProperties: ['shadow', 'stroke'],
    variantStateProperties: ['background', 'foreground'],
    scales: ['small', 'default', 'large'],
    scaleProperties: [
      'fontsize',
      'lineheight',
      'padding',
      'gap',
      'corner',
      'size',
      'strokewidth',
      'fontweight',
      'fontweight.selected',
      'strokewidth.selected',
    ],
    states: ['rest', 'hover', 'pressed', 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
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
