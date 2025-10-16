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
  exceptions?: [GroupPart];
  components?: string[];
}

export interface Groups {
  [key: string]: GroupPart;
}

const buttonGroup: GroupPart = {
  coreProperties: ['strokewidth'],
  variants: ['neutral', 'primary', 'outline', 'subtle', 'transparent'],
  variantProperties: [],
  variantStateProperties: ['background', 'stroke'],
  scales: ['small', 'medium', 'large'],
  scaleProperties: ['padding.horizontal', 'padding.vertical', 'gap', 'corner', 'minwidth'],
  states: ['rest', 'hover', 'pressed', 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
  components: ['button'],
  exceptions: [
    {
      // Outline buttons may modify strokeWidth based on state, as it is their main visual element
      variants: ['outline'],
      states: ['hover', 'pressed', 'selected'],
      variantStateProperties: ['strokewidth'],
    },
  ],
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
      variantProperties: ['foreground'],
    },
    text: {
      coreProperties: ['fontfamily'],
      scales: ['small', 'medium', 'large'],
      states: ['rest', 'hover', 'pressed', 'disabled'],
      variants: ['neutral', 'primary', 'outline', 'subtle', 'transparent'],
      variantStateProperties: ['foreground'],
      scaleProperties: ['padding.horizontal', 'fontsize', 'lineheight', 'fontweight'],
    },
    'text.secondary': {
      scales: ['small', 'medium', 'large'],
      states: ['rest', 'hover', 'pressed', 'disabled'],
      variants: ['neutral', 'primary', 'outline', 'subtle', 'transparent'],
      variantStateProperties: ['foreground'],
      scaleProperties: ['fontsize', 'lineheight', 'fontweight'],
    },
  },
};

export const groups: Groups = {
  button: buttonGroup,
};
