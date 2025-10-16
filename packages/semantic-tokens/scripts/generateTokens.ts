import { generics } from '../src/definitions/generics';
import { primitives } from '../src/definitions/primitives';
import { GroupPart, groups } from '../src/definitions/groups';

const joiner = '.';

// hardcoded for now
export const appState = {
  propertyFirst: false,
  groupCollectionName: 'group',
  showPrimitives: true,
};

export interface Token {
  name: string;
  type?: string;
  property?: string;
  group?: string;
  state?: string;
  variant?: string;
}

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
  weight: 'weight',
};

export function generatePrimitiveTokens() {
  let result = [];

  for (const prim of Object.keys(primitives)) {
    for (const style of primitives[prim].styles) {
      for (const state of primitives[prim].states) {
        let tokenParts = [prim, style, state];

        result.push({
          name: tokenParts.filter(Boolean).join(joiner),
          type: primitives[prim].type || 'color',
          property: null,
        });
      }
    }
  }
  return result;
}

export function generateGenericTokens() {
  let result: Array<Token> = [];

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

export function generateComponentGroupTokens(groupName: string, group: GroupPart, partName?: string) {
  let result: Array<Token> = [];
  const groupCoreGroupProperties = group.coreProperties || [];
  for (const property of groupCoreGroupProperties) {
    let tokenParts = [];
    let type = propertyTypes[property as keyof typeof propertyTypes] || 'dimension';

    if (appState.propertyFirst) {
      // Property first
      tokenParts = [property, appState.groupCollectionName, groupName, partName];
    } else {
      // Group-first
      tokenParts = [appState.groupCollectionName, groupName, partName, property];
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
        let type = propertyTypes[property as keyof typeof propertyTypes] || 'dimension';

        if (appState.propertyFirst) {
          // Property first
          tokenParts = [property, appState.groupCollectionName, variant, groupName, partName, state];
        } else {
          // Group-first
          tokenParts = [appState.groupCollectionName, groupName, variant, partName, property, state];
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
      let type = propertyTypes[property as keyof typeof propertyTypes] || 'dimension';

      if (appState.propertyFirst) {
        // Property first
        tokenParts = [property, appState.groupCollectionName, variant, partName, groupName];
      } else {
        // Group-first
        tokenParts = [appState.groupCollectionName, groupName, variant, partName, property];
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
      let type = propertyTypes[property as keyof typeof propertyTypes] || 'dimension';

      if (appState.propertyFirst) {
        // Property first
        tokenParts = [property, appState.groupCollectionName, groupName, scale, partName];
      } else {
        // Group-first
        tokenParts = [appState.groupCollectionName, groupName, scale, partName, property];
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

export function generateGroupTokens() {
  let result: Token[] = [];

  // For each group, generate core property tokens
  for (const group of Object.keys(groups)) {
    const groupTokens = generateComponentGroupTokens(group, groups[group]);
    result = result.concat(groupTokens);

    if (groups[group].exceptions) {
      groups[group].exceptions.forEach(exception => {
        const exceptionTokens = generateComponentGroupTokens(group, exception);
        result = result.concat(exceptionTokens);
      });
    }

    // Handle any parts of the group (generated in a similar way to groups)
    const groupParts = groups[group].parts || {};
    for (const part of Object.keys(groupParts)) {
      const partTokens = generateComponentGroupTokens(`${group}`, groupParts[part], part);
      result = result.concat(partTokens);

      if (groupParts[part].exceptions) {
        groupParts[part].exceptions.forEach(exception => {
          const exceptionTokens = generateComponentGroupTokens(group, exception, part);
          result = result.concat(exceptionTokens);
        });
      }
    }
  }

  return result;
}
