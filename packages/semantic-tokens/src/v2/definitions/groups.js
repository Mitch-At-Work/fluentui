// Definitions of component groups, their properties, variants, states, scales, and parts
export const groups = {
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
