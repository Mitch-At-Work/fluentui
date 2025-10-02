let joiner = '.';

const primitiveStyles = ['loud', 'tint', 'subtle', 'transparent'];
const states = ['rest', 'hover', 'pressed', 'selected'];

// hardcoded for now
export const appState = {
  propertyFirst: false,
  groupCollectionName: 'group',
  showPrimitives: true,
};

// Each variant of a component will have these properties at default
const variantProperties = ['background', 'foreground', 'stroke', 'shadow', 'fontFamily'];

// Scales affect different properties than variants
const scaleProperties = ['fontSize', 'lineHeight', 'padding', 'gap', 'corner', 'size'];

const primitives = {
  brand: {
    styles: primitiveStyles,
    states,
  },
  neutral: {
    styles: primitiveStyles,
    states,
  },
  status: {
    styles: primitiveStyles,
    states,
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
};

const groups = {
  button: {
    variants: ['secondary', 'primary', 'outline', 'subtle', 'transparent'],
    variantProperties,
    scales: ['small', 'base', 'large'],
    scaleProperties,
    states: [...states, 'selected-pressed', 'disabled'],
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
          type: 'color',
          property: null,
        });
      }
    }
  }
  return result;
}

export function generateGenericTokens(property) {
  let result = [];

  for (const property of Object.keys(generics)) {
    for (const variant of generics[property].variants) {
      for (const state of generics[property].states) {
        let tokenParts = [property, variant, state];

        if (property === 'corner') {
          console.log(tokenParts.filter(Boolean).join(joiner));
        }

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

  // For each group, generate property tokens for each variant and scale
  for (const group of Object.keys(groups)) {
    for (const property of groups[group].variantProperties) {
      for (let variant of groups[group].variants) {
        for (let state of groups[group].states) {
          let tokenParts = [];
          let type = variantProperties[property] || 'dimension';

          if (type !== 'color') {
            variant = '';
            state = '';
          }

          if (appState.propertyFirst) {
            // Property first
            tokenParts = [property, appState.groupCollectionName, group, variant, state];
          } else {
            // Group-first
            tokenParts = [appState.groupCollectionName, group, property, variant, state];
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

  // // Add tokens for scale properties
  // for (const group of Object.keys(groups)) {
  //   for (const scale of groups[group].scales) {
  //     let thisScale = scale.length ? scale : "base";
  //     for (const property of scales[thisScale].properties) {
  //       let tokenParts = [];
  //       let type = variantProperties[property] || "dimension";

  //       if (appState.propertyFirst) {
  //         // Property first
  //         tokenParts = [property, appState.groupCollectionName, group, scale];
  //       } else {
  //         // Group-first
  //         tokenParts = [appState.groupCollectionName, group, scale, property];
  //       }

  //       const groupScaleToken = {
  //         name: tokenParts.filter(Boolean).join(joiner),
  //         type,
  //         property,
  //         group,
  //         scale
  //       };

  //       groupScaleToken.fallback = getFallbackForGroupScale(groupScaleToken)
  //         .filter(Boolean)
  //         .join(joiner);

  //       if (!result.find((r) => r.name === groupScaleToken.name)) {
  //         result.push(groupScaleToken);
  //       }
  //     }
  //   }
  // }
  return result;
}
