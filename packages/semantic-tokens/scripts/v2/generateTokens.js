let joiner = ".";

const primitiveStyles = ["loud", "tint", "subtle", "transparent"];
const states = ["rest", "hover", "pressed", "selected"];

// hardcoded for now
export const appState = {
  propertyFirst: false,
  groupCollectionName: "group",
  showPrimitives: true
};

const propertyTypes = {
  background: "color",
  foreground: "color",
  stroke: "color",
  shadow: "shadow",
  fontFamily: "fontFamily",
  fontSize: "fontSize"
};

const primitives = {
  brand: {
    styles: primitiveStyles,
    states
  },
  neutral: {
    styles: primitiveStyles,
    states
  },
  status: {
    styles: primitiveStyles,
    states
  }
};

// Properties are generic tokens
export const properties = {
  background: {
    type: "color",
    variants: ["brand", "neutral", "status"],
    states: [...states, "disabled"],
    styles: primitiveStyles,
    color: "DarkBlue"
  },
  corner: {
    type: "dimension",
    variants: ["default", "circular", "rounded", "zero"],
    states: [""],
    styles: [""],
    color: "MidnightBlue"
  },
  foreground: {
    type: "color",
    variants: ["onBrand", "onNeutral"],
    styles: primitiveStyles,
    states: [...states, "disabled"],
    color: "Teal"
  },
  gap: {
    type: "dimension",
    variants: ["between", "inside"],
    states: [""],
    styles: ["content"],
    color: "Indigo"
  },
  padding: {
    type: "dimension",
    variants: ["textTop", "textBottom", "textSide"],
    states: [""],
    styles: [""],
    color: "DarkSlateGray"
  },
  shadow: {
    type: "shadow",
    variants: ["key", "ambient"],
    states: states,
    styles: [""],
    color: "Maroon"
  },
  size: {
    type: "dimension",
    variants: ["default"],
    states: [""],
    styles: [""],
    color: "SaddleBrown"
  },
  stroke: {
    type: "color",
    variants: [""],
    styles: [""],
    states: [...states, "disabled"],
    color: "DarkGreen"
  },
  strokeWidth: {
    type: "dimension",
    variants: ["outline"],
    states: [""],
    styles: [""],
    color: "DarkRed"
  },
  text: {
    type: "typography",
    variants: ["ramp", "global"],
    states: [""],
    styles: [""],
    color: "DarkOrange"
  }
};

// Scales belong to groups
const scales = {
  small: {
    properties: ["fontSize", "lineHeight", "padding", "gap", "corner", "size"]
  },
  base: {
    properties: ["fontSize", "lineHeight", "padding", "gap", "corner", "size"]
  },
  large: {
    properties: ["fontSize", "lineHeight", "padding", "gap", "corner", "size"]
  }
};

// Groups haveMany Properties
// Groups haveMany Variants
// Groups haveMany States
// Groups haveMany Scales
// Groups haveMany Components
const groups = {
  button: {
    styles: ["loud", "tint", "outline", "transparent"],
    variants: ["brand", "neutral"],
    properties: ["background", "foreground", "corner"],
    scales: ["small", "base", "large"],
    states: [...states, "selected-pressed", "disabled"],
    components: ["button"]
  },
  card: {
    properties: ["background", "foreground", "corner"],
    variants: [""],
    styles: [""],
    states: [""],
    components: ["card"],
    scales: [""]
  },
  choice: {
    styles: [""],
    variants: [""],
    properties: ["background", "foreground", "corner"],
    states: [...states, "selected-pressed", "disabled"],
    components: ["checkbox", "radio", "switch"],
    scales: [""]
  },
  flyout: {
    properties: ["background", "foreground", "corner"],
    variants: [""],
    styles: [""],
    states: [""],
    components: ["dialog", "drawer", "menu"],
    scales: [""]
  },
  input: {
    properties: ["background", "foreground"],
    variants: [""],
    styles: [""],
    states: [""],
    components: ["textInput", "textArea"],
    scales: [""]
  },
  list: {
    properties: ["background", "foreground", "corner"],
    variants: [""],
    styles: [""],
    states: [...states, "selected-pressed", "disabled"],
    components: ["accordion"],
    scales: [""]
  },
  navigation: {
    properties: ["background", "foreground", "corner"],
    variants: [""],
    styles: [""],
    states: [...states, "selected-pressed", "disabled"],
    components: ["tabs", "filter"],
    scales: [""]
  }
};

/**
 * @typedef Component
 * @property {Component[]} parts
 * @proeprty {string[]} properties
 * @property {string[]} sizes
 * @property {string[]} states
 * @property {string[]} variants
 */

// TODO: Parts
// Parts haveMany Parts (sub-items)
// Parts haveMany Properties
// Parts haveMany Variants
// Parts haveMany Styles
// Parts haveMany States
/** @type {Object.<string, Component>} */
const parts = {
  header: {
    parts: [],
    properties: ["fontSize", "lineHeight"],
    states: [""],
    styles: [""],
    variants: [""]
  },
  icon: {
    parts: [],
    properties: ["background"],
    styles: [""],
    states: [""],
    variants: ["outline", "filled"]
  },
  indicator: {
    parts: [],
    properties: ["background", "foreground"],
    styles: [""],
    states: ["unselected", "indeterminate", "selected"],
    variants: [""]
  },
  thumb: {
    parts: [],
    properties: [""],
    styles: ["background", "foreground"],
    states: ["unselected", "selected"],
    variants: [""]
  }
};

// Components haveMany Variants
// Components haveMany Styles
// Components haveMany States
// Components haveMany Parts
/** @type {Object.<string, Component>} */
const components = {
  accordion: {
    parts: ["header", "content", "icon"],
    properties: ["background", "foreground"],
    styles: [""],
    states: states,
    variants: [""]
  },
  badge: {
    variants: ["brand", "neutral"],
    styles: ["loud", "tint"],
    properties: ["background", "foreground"],
    parts: ["icon"],
    states: [""]
  },
  button: {
    variants: ["brand", "neutral"],
    styles: ["loud", "tint", "subtle", "outline", "transparent"],
    parts: ["icon"],
    properties: ["background", "foreground"],
    states: [...states, "selected-pressed", "disabled"]
  },
  checkbox: {
    parts: [],
    properties: ["background", "foreground"],
    styles: [""],
    states: [...states, "selected-pressed", "disabled"],
    variants: [""]
  },
  radio: {
    parts: ["indicator"],
    styles: [""],
    properties: ["background", "foreground"],
    states: [...states, "selected-pressed", "disabled"],
    variants: [""]
  },
  switch: {
    variants: [],
    properties: ["background", "padding"],
    parts: ["thumb"],
    styles: [""],
    states: [...states, "selected-pressed", "disabled"]
  }
};

export function generatePrimitiveTokens() {
  let result = [];

  for (const prim of Object.keys(primitives)) {
    for (const style of primitives[prim].styles) {
      for (const state of primitives[prim].states) {
        let tokenParts = [`#${prim}`, style, state];

        result.push({
          name: tokenParts.filter(Boolean).join(joiner),
          type: "color",
          property: null
        });
      }
    }
  }
  return result;
}

export function generatePropertyTokens(property) {
  let result = [];

  for (const property of Object.keys(properties)) {
    for (const variant of properties[property].variants) {
      for (const style of properties[property].styles) {
        for (const state of properties[property].states) {
          let tokenParts = [property, variant, style, state];

          if (property === "corner") {
            console.log(tokenParts.filter(Boolean).join(joiner));
          }

          const propertyToken = {
            name: tokenParts.filter(Boolean).join(joiner),
            type: propertyTypes[property] || "dimension",
            property,
            variant,
            style,
            state
          };

          propertyToken.fallback = getFallbackForProperty(propertyToken)
            .filter(Boolean)
            .join(joiner);

          result.push(propertyToken);
        }
      }
    }
  }
  return result;
}

export function getFallbackForProperty(propertyToken) {
  if (!appState.showPrimitives) return [];
  const { variant, style, state } = propertyToken;

  if (variant && !primitives[variant]) return [];
  if (style && !primitiveStyles.includes(style)) return [];
  if (state && !states.includes(state)) return [];

  return [`#${variant}`, style, state];
}

export function generateGroupTokens(property) {
  let result = [];

  for (const group of Object.keys(groups)) {
    for (const property of groups[group].properties) {
      for (let variant of groups[group].variants) {
        for (let style of groups[group].styles) {
          for (let state of groups[group].states) {
            let tokenParts = [];
            let type = propertyTypes[property] || "dimension";

            if (type !== "color") {
              variant = "";
              style = "";
              state = "";
            }

            if (appState.propertyFirst) {
              // Property first
              tokenParts = [
                property,
                appState.groupCollectionName,
                group,
                variant,
                style,
                state
              ];
            } else {
              // Group-first
              tokenParts = [
                appState.groupCollectionName,
                group,
                property,
                variant,
                style,
                state
              ];
            }

            const groupToken = {
              name: tokenParts.filter(Boolean).join(joiner),
              type,
              property: property
            };

            groupToken.fallback = getFallbackForGroup(groupToken);

            if (!result.find((r) => r.name === groupToken.name)) {
              result.push(groupToken);
            }
          }
        }
      }
    }
  }

  // Add tokens for scale properties
  for (const group of Object.keys(groups)) {
    for (const scale of groups[group].scales) {
      let thisScale = scale.length ? scale : "base";
      for (const property of scales[thisScale].properties) {
        let tokenParts = [];
        let type = propertyTypes[property] || "dimension";

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
          scale
        };

        groupScaleToken.fallback = getFallbackForGroupScale(groupScaleToken)
          .filter(Boolean)
          .join(joiner);

        if (!result.find((r) => r.name === groupScaleToken.name)) {
          result.push(groupScaleToken);
        }
      }
    }
  }
  return result;
}

export function getFallbackForGroupScale(groupScaleToken) {
  const { group, property, scale } = groupScaleToken;

  let tokenParts = [appState.groupCollectionName, group, property, "base?"];
  if (appState.propertyFirst) {
    tokenParts = [property, appState.groupCollectionName, group, "base?"];
  }

  // TODO: fallback to base?
  return scale && scale !== "base" ? tokenParts : [];
}

export function getFallbackForGroup(groupToken) {
  const { property, style, variant, state } = groupToken;
  const propertyObj = properties[property];

  if (
    propertyObj &&
    propertyObj.styles.includes(style) &&
    propertyObj.variants.includes(variant) &&
    propertyObj.states.includes(state)
  ) {
    return [property, variant, style, state].filter(Boolean).join(joiner);
  } else {
    return [];
  }
}

// TODO: Add Parts
export function generateComponentTokens() {
  let result = [];
  for (const component of Object.keys(components)) {
    for (const property of components[component].properties) {
      for (const variant of components[component].variants) {
        for (const style of components[component].styles) {
          for (const state of components[component].states) {
            let tokenParts = [];
            if (appState.propertyFirst) {
              // property first
              tokenParts = [property, "ctrl", component, variant, style, state];
            } else {
              // Ctrl-first
              tokenParts = ["ctrl", component, property, variant, style, state];
            }

            const componentToken = {
              name: tokenParts.filter(Boolean).join(joiner),
              type: propertyTypes[property] || "dimension",
              property,
              component,
              variant,
              style,
              state
            };

            // componentToken.fallback = getFallbackForComponent(componentToken)
            //   .filter(Boolean)
            //   .join(joiner);

            result.push(componentToken);
          }
        }
      }
    }
  }

  for (const component of Object.keys(components)) {
    for (const part of components[component].parts) {
      const thisPart = parts[part];
      if (thisPart) {
        for(const style of thisPart.styles) {
        for (const variant of thisPart.variants) {
          for (const property of thisPart.properties) {
            for(const state of thisPart.states) {
            let tokenParts = ["ctrl", component, part, variant, style, property, state];

            console.log(appState.propertyFirst)
            if (appState.propertyFirst) {
              // property first
              tokenParts = [property, "ctrl", component, part, variant, style, state];
            }

            const partToken = {
              name: tokenParts.filter(Boolean).join(joiner),
              type: propertyTypes[property] || "dimension",
              property,
              part
            };

            result.push(partToken);
          }}
        }}
      }
    }
  }
  return result;
}
