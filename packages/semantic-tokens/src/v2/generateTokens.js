let joiner = '.';

const primitiveStyles = ['loud', 'tint', 'subtle', 'transparent'];
const states = ['rest', 'hover', 'pressed'];

// hardcoded for now
export const appState = {
  propertyFirst: false,
  groupCollectionName: 'group',
  showPrimitives: true,
};

// Each group of components will have these properties at default
// These properties have NO states and NO variants
const coreProperties = ['fontfamily'];

// Each variant of a component will have these properties at default
// States will be appended here, i.e. rest, hover, pressed, disabled
const variantProperties = ['background', 'foreground', 'stroke'];

// Scales affect different properties than variants
// These properties will be appended to the scale, i.e. small, base, large
const scaleProperties = ['fontsize', 'lineheight', 'padding', 'gap', 'corner', 'size', 'strokewidth'];

// These help us map the property to a type, and eventual value classiification
const propertyTypes = {
  background: 'color',
  foreground: 'color',
  stroke: 'color',
  fontsize: 'dimension',
  lineheight: 'dimension',
  padding: 'dimension',
  gap: 'dimension',
};

const primitives = {
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

const groups = {
  button: {
    coreProperties,
    variants: ['secondary', 'primary', 'outline', 'subtle', 'transparent'],
    variantProperties,
    scales: ['small', 'base', 'large'],
    scaleProperties,
    states: [...states, 'rest.selected', 'hover.selected', 'pressed.selected', 'disabled'],
    components: ['button'],
  },
};

export function generatePrimitiveTokens() {
  let result = [];

  for (const prim of Object.keys(primitives)) {
    for (const style of primitives[prim].styles) {
      for (const state of primitives[prim].states) {
        let tokenParts = [`#${prim}`, style, state];

        result.push({
          name: tokenParts.filter(Boolean).join(joiner),
          type: prim.type || 'color',
          property: null,
        });
      }
    }
  }
  return result;
}

// Todo: Control tokens (Follows same schema as groups but for exception cases)
export function getGenericToken(property, variant, state) {
  if (generics[property] && generics[property].variants.includes(variant)) {
    let tokenParts = [`#${property}`, variant, state];
  }
}

export function generateGenericTokens() {
  let result = [];

  for (const property of Object.keys(generics)) {
    for (const variant of generics[property].variants) {
      for (const state of generics[property].states) {
        let tokenParts = [property, variant, state];

        const propertyToken = {
          name: tokenParts.filter(Boolean).join(joiner),
          type: generics[property].type || 'dimension',
          property,
          variant,
          state,
        };

        result.push(propertyToken);
      }
    }
  }
  return result;
}

export function generateGroupTokens(property) {
  let result = [];

  // For each group, generate core property tokens
  for (const group of Object.keys(groups)) {
    for (const property of groups[group].coreProperties) {
      let tokenParts = [];
      let type = propertyTypes[property] || 'dimension';

      if (appState.propertyFirst) {
        // Property first
        tokenParts = [property, appState.groupCollectionName, group];
      } else {
        // Group-first
        tokenParts = [appState.groupCollectionName, group, property];
      }

      const groupToken = {
        name: tokenParts.filter(Boolean).join(joiner),
        type,
        property: property,
      };

      if (!result.find(r => r.name === groupToken.name)) {
        result.push(groupToken);
      }
    }
  }

  // For each group, generate property tokens for each variant and scale
  for (const group of Object.keys(groups)) {
    for (const property of groups[group].variantProperties) {
      for (let variant of groups[group].variants) {
        for (let state of groups[group].states) {
          let tokenParts = [];
          let type = variantProperties[property] || 'dimension';

          if (appState.propertyFirst) {
            // Property first
            tokenParts = [property, appState.groupCollectionName, variant, group, state];
          } else {
            // Group-first
            tokenParts = [appState.groupCollectionName, group, variant, property, state];
          }

          const groupToken = {
            name: tokenParts.filter(Boolean).join(joiner),
            type,
            property: property,
          };

          if (!result.find(r => r.name === groupToken.name)) {
            result.push(groupToken);
          }
        }
      }
    }
  }

  // Add tokens for scale properties
  for (const group of Object.keys(groups)) {
    const groupScales = groups[group].scales || ['base'];
    for (const scale of groupScales) {
      for (const property of scaleProperties) {
        let tokenParts = [];
        let type = variantProperties[property] || 'dimension';

        if (appState.propertyFirst) {
          // Property first
          tokenParts = [property, appState.groupCollectionName, group, scale];
        } else {
          // Group-first
          tokenParts = [appState.groupCollectionName, group, scale, property];
        }

        const groupScaleToken = {
          name: tokenParts.filter(Boolean).join(joiner),
          type,
          property,
          group,
          scale,
        };

        if (!result.find(r => r.name === groupScaleToken.name)) {
          result.push(groupScaleToken);
        }
      }
    }
  }
  return result;
}
