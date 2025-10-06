import { groups } from './definitions/groups.js';
import { generics, variantProperties, coreProperties, scaleProperties } from './definitions/generics.js';
import { primitives } from './definitions/primitives.js';

const joiner = '.';

// hardcoded for now
export const appState = {
  propertyFirst: false,
  groupCollectionName: 'group',
  showPrimitives: true,
};

// These help us map the property to a type, and eventual value classification
const propertyTypes = {
  background: 'color',
  foreground: 'color',
  stroke: 'color',
  fontsize: 'dimension',
  lineheight: 'dimension',
  padding: 'dimension',
  gap: 'dimension',
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
