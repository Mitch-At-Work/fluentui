import { groups } from './definitions/groups.js';
import { generics } from './definitions/generics.js';
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
  shadow: 'shadow',
  corner: 'dimension',
  size: 'dimension',
  divider: 'color',
  color: 'color',
  strokewidth: 'dimension',
  fontfamily: 'string',
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

export function generateGenericTokens() {
  let result = [];

  for (const property of Object.keys(generics)) {
    for (const variant of generics[property].variants) {
      const states = generics[property].states || [''];
      for (const state of states) {
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

export function generateComponentGroupTokens(groupName, group) {
  let result = [];
  const groupCoreGroupProperties = group.coreProperties || [];
  for (const property of groupCoreGroupProperties) {
    let tokenParts = [];
    let type = propertyTypes[property] || 'dimension';

    if (appState.propertyFirst) {
      // Property first
      tokenParts = [property, appState.groupCollectionName, groupName];
    } else {
      // Group-first
      tokenParts = [appState.groupCollectionName, groupName, property];
    }

    const groupToken = {
      name: tokenParts.filter(Boolean).join(joiner),
      type,
      property: property,
      group: groupName,
    };

    if (!result.find(r => r.name === groupToken.name)) {
      result.push(groupToken);
    }
  }

  // For each group, generate property tokens for each variant and scale
  const groupVariantStateProperties = group.variantStateProperties || [];
  for (const property of groupVariantStateProperties) {
    const groupVariants = group.variants || [];
    for (let variant of groupVariants) {
      const groupStates = group.states || ['rest'];
      for (let state of groupStates) {
        let tokenParts = [];
        let type = propertyTypes[property] || 'dimension';

        if (appState.propertyFirst) {
          // Property first
          tokenParts = [property, appState.groupCollectionName, variant, groupName, state];
        } else {
          // Group-first
          tokenParts = [appState.groupCollectionName, groupName, variant, property, state];
        }

        const groupToken = {
          name: tokenParts.filter(Boolean).join(joiner),
          type,
          property: property,
          group: groupName,
        };

        if (!result.find(r => r.name === groupToken.name)) {
          result.push(groupToken);
        }
      }
    }
  }

  // Add variant properties that don't have states
  const groupVariantProperties = group.variantProperties || [];
  for (const property of groupVariantProperties) {
    const groupVariants = group.variants || [];
    for (let variant of groupVariants) {
      let tokenParts = [];
      let type = propertyTypes[property] || 'dimension';

      if (appState.propertyFirst) {
        // Property first
        tokenParts = [property, appState.groupCollectionName, variant, groupName];
      } else {
        // Group-first
        tokenParts = [appState.groupCollectionName, groupName, variant, property];
      }

      const groupToken = {
        name: tokenParts.filter(Boolean).join(joiner),
        type,
        property: property,
        group: groupName,
      };

      if (!result.find(r => r.name === groupToken.name)) {
        result.push(groupToken);
      }
    }
  }

  // Add tokens for scale properties
  const groupScales = group.scales || ['default'];
  for (const scale of groupScales) {
    const groupScaleProperties = group.scaleProperties || [];
    for (const property of groupScaleProperties) {
      let tokenParts = [];
      let type = propertyTypes[property] || 'dimension';

      if (appState.propertyFirst) {
        // Property first
        tokenParts = [property, appState.groupCollectionName, groupName, scale];
      } else {
        // Group-first
        tokenParts = [appState.groupCollectionName, groupName, scale, property];
      }

      const groupScaleToken = {
        name: tokenParts.filter(Boolean).join(joiner),
        type,
        property,
        group: groupName,
        scale,
      };

      if (!result.find(r => r.name === groupScaleToken.name)) {
        result.push(groupScaleToken);
      }
    }
  }

  return result;
}

export function generateGroupTokens(property) {
  let result = [];

  // For each group, generate core property tokens
  for (const group of Object.keys(groups)) {
    const groupTokens = generateComponentGroupTokens(group, groups[group]);
    result = result.concat(groupTokens);

    // Handle any parts of the group (generated in a similar way to groups)
    const groupParts = groups[group].parts;
    for (const part of Object.keys(groupParts)) {
      const partTokens = generateComponentGroupTokens(`${group}.${part}`, groupParts[part]);
      result = result.concat(partTokens);
    }
  }

  return result;
}
