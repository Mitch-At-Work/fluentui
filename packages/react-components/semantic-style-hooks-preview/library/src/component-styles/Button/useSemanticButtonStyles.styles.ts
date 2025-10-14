import { iconFilledClassName, iconRegularClassName } from '@fluentui/react-icons';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@fluentui/react-theme';
import { shorthands, makeStyles, makeResetStyles, mergeClasses } from '@griffel/react';
import * as semanticTokens from '@fluentui/semantic-tokens';
import { buttonClassNames, type ButtonState } from '@fluentui/react-button';
import { getSlotClassNameProp_unstable } from '@fluentui/react-utilities';

const iconSpacingVar = '--fui-Button__icon--spacing';

const buttonSpacingSmallWithIcon = `max(1px, calc(${semanticTokens.groupButtonSmallPaddingVertical} - 2px))`;
const buttonSpacingLargeWithIcon = `max(0px, calc(${semanticTokens.groupButtonLargePaddingVertical} - 1px))`;

const paddingSmHorizontalNoIcon = `calc(${semanticTokens.groupButtonSmallPaddingHorizontal} + ${semanticTokens.groupButtonMediumTextPaddingHorizontal})`;
const paddingHorizontalNoIcon = `calc(${semanticTokens.groupButtonMediumPaddingHorizontal} + ${semanticTokens.groupButtonMediumTextPaddingHorizontal})`;
const paddingLgHorizontalNoIcon = `calc(${semanticTokens.groupButtonLargePaddingHorizontal} + ${semanticTokens.groupButtonMediumTextPaddingHorizontal})`;

/* Firefox has box shadow sizing issue at some zoom levels
 * this will ensure the inset boxShadow is always uniform
 * without affecting other browser platforms
 */
const boxShadowStrokeWidthThinMoz = `calc(${semanticTokens.focusStrokewidthInner} + 0.25px)`;

const useRootBaseClassName = makeResetStyles({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  textDecorationLine: 'none',
  verticalAlign: 'middle',

  margin: 0,
  overflow: 'hidden',

  backgroundColor: semanticTokens.groupButtonDefaultBackgroundRest,
  color: semanticTokens.groupButtonDefaultTextForegroundRest,
  border: `${semanticTokens.groupButtonMediumStrokewidth} solid ${semanticTokens.groupButtonDefaultStrokeRest}`,

  fontFamily: semanticTokens.groupButtonFontfamily,
  outlineStyle: 'none',

  ':hover': {
    backgroundColor: semanticTokens.groupButtonDefaultBackgroundHover,
    borderColor: semanticTokens.groupButtonDefaultStrokeHover,
    color: semanticTokens.groupButtonDefaultTextForegroundHover,
    cursor: 'pointer',
  },

  ':hover:active': {
    backgroundColor: semanticTokens.groupButtonDefaultBackgroundPressed,
    borderColor: semanticTokens.groupButtonDefaultStrokePressed,
    color: semanticTokens.groupButtonDefaultTextForegroundPressed,
    outlineStyle: 'none',
  },

  padding: `${semanticTokens.groupButtonMediumPaddingVertical} ${paddingHorizontalNoIcon} ${semanticTokens.groupButtonMediumPaddingVertical} ${paddingHorizontalNoIcon}`,
  minWidth: semanticTokens.groupButtonMediumMinwidth,
  borderRadius: semanticTokens.groupButtonMediumBorderradius,

  fontSize: semanticTokens.groupButtonMediumFontsize,
  fontWeight: semanticTokens.groupButtonMediumFontweight,
  lineHeight: semanticTokens.groupButtonMediumLineheight,

  // Transition styles
  // TODO: Motion semantic tokens are still in definition phase, refactor these later
  transitionDuration: tokens.durationFaster,
  transitionProperty: 'background, border, color',
  transitionTimingFunction: tokens.curveEasyEase,

  '@media screen and (prefers-reduced-motion: reduce)': {
    transitionDuration: '0.01ms',
  },

  // High contrast styles

  '@media (forced-colors: active)': {
    ':focus': {
      borderColor: 'ButtonText',
    },

    ':hover': {
      backgroundColor: 'HighlightText',
      borderColor: 'Highlight',
      color: 'Highlight',
      forcedColorAdjust: 'none',
    },

    ':hover:active': {
      backgroundColor: 'HighlightText',
      borderColor: 'Highlight',
      color: 'Highlight',
      forcedColorAdjust: 'none',
    },
  },

  // Focus styles
  ...createCustomFocusIndicatorStyle({
    borderColor: semanticTokens.focusStrokeInner,
    borderRadius: semanticTokens.groupButtonMediumBorderradius,
    borderWidth: '1px',
    outline: `${semanticTokens.focusStrokewidthOuter} solid ${semanticTokens.focusStrokeOuter}`,
    boxShadow: `0 0 0 ${semanticTokens.focusStrokewidthInner} ${semanticTokens.focusStrokeInner}
      inset
    `,
    zIndex: 1,
  }),

  // BUGFIX: Mozilla specific styles (Mozilla BugID: 1857642)
  '@supports (-moz-appearance:button)': {
    ...createCustomFocusIndicatorStyle({
      boxShadow: `0 0 0 ${boxShadowStrokeWidthThinMoz} ${semanticTokens.focusStrokeInner}
      inset
    `,
    }),
  },
});

const useIconBaseClassName = makeResetStyles({
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',

  fontSize: semanticTokens.groupButtonMediumIconSize,
  height: semanticTokens.groupButtonMediumIconSize,
  width: semanticTokens.groupButtonMediumIconSize,

  [iconSpacingVar]: `calc(${semanticTokens.groupButtonMediumGap} + ${semanticTokens.groupButtonMediumTextPaddingHorizontal})`,
});

const useRootStyles = makeStyles({
  // Appearance variations
  outline: {
    backgroundColor: semanticTokens.groupButtonOutlineBackgroundRest,
    border: `${semanticTokens.groupButtonMediumStrokewidth} solid ${semanticTokens.groupButtonOutlineStrokeRest}`,
    color: semanticTokens.groupButtonOutlineTextForegroundRest,
    ':hover': {
      backgroundColor: semanticTokens.groupButtonOutlineBackgroundHover,
      border: `${semanticTokens.groupButtonMediumStrokewidth} solid ${semanticTokens.groupButtonOutlineStrokeHover}`,
      color: semanticTokens.groupButtonOutlineTextForegroundHover,
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonOutlineBackgroundPressed,
      border: `${semanticTokens.groupButtonMediumStrokewidth} solid ${semanticTokens.groupButtonOutlineStrokePressed}`,
      color: semanticTokens.groupButtonOutlineTextForegroundPressed,
    },
  },

  primary: {
    backgroundColor: semanticTokens.groupButtonPrimaryBackgroundRest,
    ...shorthands.borderColor(semanticTokens.groupButtonPrimaryStrokeRest),
    color: semanticTokens.groupButtonPrimaryTextForegroundRest,

    ':hover': {
      backgroundColor: semanticTokens.groupButtonPrimaryBackgroundHover,
      ...shorthands.borderColor(semanticTokens.groupButtonPrimaryStrokeHover),
      color: semanticTokens.groupButtonPrimaryTextForegroundHover,
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonPrimaryBackgroundPressed,
      ...shorthands.borderColor(semanticTokens.groupButtonPrimaryStrokePressed),
      color: semanticTokens.groupButtonPrimaryTextForegroundPressed,
    },

    '@media (forced-colors: active)': {
      backgroundColor: 'Highlight',
      ...shorthands.borderColor('HighlightText'),
      color: 'HighlightText',
      forcedColorAdjust: 'none',

      ':hover': {
        backgroundColor: 'HighlightText',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
      },

      ':hover:active': {
        backgroundColor: 'HighlightText',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
      },
    },
  },
  secondary: {
    /* The secondary styles are exactly the same as the base styles. */
  },
  subtle: {
    backgroundColor: semanticTokens.groupButtonSubtleBackgroundRest,
    ...shorthands.borderColor(semanticTokens.groupButtonSubtleStrokeRest),
    color: semanticTokens.groupButtonSubtleTextForegroundRest,

    [`& .${buttonClassNames.icon}`]: {
      color: semanticTokens.groupButtonSubtleIconForegroundRest,
    },

    ':hover': {
      backgroundColor: semanticTokens.groupButtonSubtleBackgroundHover,
      ...shorthands.borderColor(semanticTokens.groupButtonSubtleStrokeHover),
      color: semanticTokens.groupButtonSubtleTextForegroundHover,
      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
      [`& .${buttonClassNames.icon}`]: {
        color: semanticTokens.groupButtonSubtleIconForegroundHover,
      },
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonSubtleBackgroundPressed,
      ...shorthands.borderColor(semanticTokens.groupButtonSubtleStrokePressed),
      color: semanticTokens.groupButtonSubtleTextForegroundPressed,
      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
      [`& .${buttonClassNames.icon}`]: {
        color: semanticTokens.groupButtonSubtleIconForegroundPressed,
      },
    },

    '@media (forced-colors: active)': {
      ':hover': {
        color: 'Highlight',

        [`& .${buttonClassNames.icon}`]: {
          color: 'Highlight',
        },
      },
      ':hover:active': {
        color: 'Highlight',

        [`& .${buttonClassNames.icon}`]: {
          color: 'Highlight',
        },
      },
    },
  },
  transparent: {
    backgroundColor: semanticTokens.groupButtonTransparentBackgroundRest,
    ...shorthands.borderColor('transparent'),
    color: semanticTokens.groupButtonTransparentIconForegroundRest,

    ':hover': {
      backgroundColor: semanticTokens.groupButtonTransparentBackgroundHover,
      ...shorthands.borderColor('transparent'),
      color: semanticTokens.groupButtonTransparentTextForegroundHover,
      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonTransparentBackgroundPressed,
      ...shorthands.borderColor('transparent'),
      color: semanticTokens.groupButtonTransparentTextForegroundPressed,
      [`& .${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'none',
      },
    },

    '@media (forced-colors: active)': {
      ':hover': {
        backgroundColor: semanticTokens.groupButtonTransparentBackgroundRest,
        color: 'Highlight',
      },
      ':hover:active': {
        backgroundColor: semanticTokens.groupButtonTransparentBackgroundRest,
        color: 'Highlight',
      },
    },
  },

  // Shape variations
  circular: { borderRadius: semanticTokens.borderRadiusCircular },
  rounded: {
    /* The borderRadius rounded styles are handled in the size variations */
  },
  square: { borderRadius: semanticTokens.borderRadiusSquare },

  // Size variations
  small: {
    minWidth: semanticTokens.groupButtonSmallMinwidth,
    padding: `${semanticTokens.groupButtonSmallPaddingVertical} ${paddingSmHorizontalNoIcon}`, //3px
    borderRadius: semanticTokens.groupButtonSmallBorderradius,

    fontSize: semanticTokens.groupButtonSmallFontsize,
    fontWeight: semanticTokens.groupButtonSmallFontweight,
    lineHeight: semanticTokens.groupButtonSmallLineheight,
  },
  smallWithIcon: {
    paddingBottom: buttonSpacingSmallWithIcon,
    paddingTop: buttonSpacingSmallWithIcon,
  },
  smallWithIconBefore: {
    paddingRight: paddingSmHorizontalNoIcon,
    paddingLeft: semanticTokens.groupButtonSmallPaddingHorizontal,
  },
  smallWithIconAfter: {
    paddingRight: semanticTokens.groupButtonSmallPaddingHorizontal,
    paddingLeft: paddingSmHorizontalNoIcon,
  },
  medium: {
    /* defined in base styles */
  },
  mediumWithIconBefore: {
    paddingRight: paddingHorizontalNoIcon,
    paddingLeft: semanticTokens.groupButtonMediumPaddingHorizontal,
  },
  mediumWithIconAfter: {
    paddingRight: semanticTokens.groupButtonMediumPaddingHorizontal,
    paddingLeft: paddingHorizontalNoIcon,
  },
  large: {
    minWidth: semanticTokens.groupButtonLargeMinwidth,
    padding: `${semanticTokens.groupButtonLargePaddingVertical} ${paddingLgHorizontalNoIcon}`,
    borderRadius: semanticTokens.groupButtonLargeBorderradius,

    fontSize: semanticTokens.groupButtonLargeFontsize,
    fontWeight: semanticTokens.groupButtonLargeFontweight,
    lineHeight: semanticTokens.groupButtonLargeLineheight,
  },
  largeWithIcon: {
    paddingBottom: buttonSpacingLargeWithIcon,
    paddingTop: buttonSpacingLargeWithIcon,
  },
  largeWithIconBefore: {
    paddingRight: paddingLgHorizontalNoIcon,
    paddingLeft: semanticTokens.groupButtonLargePaddingHorizontal,
  },
  largeWithIconAfter: {
    paddingRight: semanticTokens.groupButtonLargePaddingHorizontal,
    paddingLeft: paddingLgHorizontalNoIcon,
  },
});

const useRootDisabledStyles = makeStyles({
  // Base styles
  base: {
    backgroundColor: semanticTokens.groupButtonDefaultBackgroundDisabled,
    ...shorthands.borderColor(semanticTokens.groupButtonDefaultStrokeDisabled),
    color: semanticTokens.groupButtonDefaultTextForegroundDisabled,
    cursor: 'not-allowed',
    [`& .${buttonClassNames.icon}`]: {
      color: semanticTokens.groupButtonDefaultIconForegroundDisabled,
    },

    ':hover': {
      backgroundColor: semanticTokens.groupButtonDefaultBackgroundDisabled,
      ...shorthands.borderColor(semanticTokens.groupButtonDefaultStrokeDisabled),
      color: semanticTokens.groupButtonDefaultTextForegroundDisabled,

      cursor: 'not-allowed',

      [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      },
      [`& .${buttonClassNames.icon}`]: {
        color: semanticTokens.groupButtonDefaultIconForegroundDisabled,
      },
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonDefaultBackgroundDisabled,
      ...shorthands.borderColor(semanticTokens.groupButtonDefaultStrokeDisabled),
      color: semanticTokens.groupButtonDefaultTextForegroundDisabled,

      cursor: 'not-allowed',

      [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      },
      [`& .${buttonClassNames.icon}`]: {
        color: semanticTokens.groupButtonDefaultIconForegroundDisabled,
      },
    },
  },

  // High contrast styles
  highContrast: {
    '@media (forced-colors: active)': {
      backgroundColor: 'ButtonFace',
      ...shorthands.borderColor('GrayText'),
      color: 'GrayText',

      [`& .${buttonClassNames.icon}`]: {
        color: 'GrayText',
      },

      ':focus': {
        ...shorthands.borderColor('GrayText'),
      },

      ':hover': {
        backgroundColor: 'ButtonFace',
        ...shorthands.borderColor('GrayText'),
        color: 'GrayText',

        [`& .${buttonClassNames.icon}`]: {
          color: 'GrayText',
        },
      },

      ':hover:active': {
        backgroundColor: 'ButtonFace',
        ...shorthands.borderColor('GrayText'),
        color: 'GrayText',

        [`& .${buttonClassNames.icon}`]: {
          color: 'GrayText',
        },
      },
    },
  },

  // Appearance variations
  outline: {
    backgroundColor: semanticTokens.groupButtonOutlineBackgroundDisabled,
    color: semanticTokens.groupButtonOutlineTextForegroundDisabled,
    ...shorthands.borderColor(semanticTokens.groupButtonOutlineStrokeDisabled),

    ':hover': {
      backgroundColor: semanticTokens.groupButtonOutlineBackgroundDisabled,
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonOutlineBackgroundDisabled,
    },
  },
  primary: {
    ...shorthands.borderColor(semanticTokens.groupButtonPrimaryStrokeDisabled),

    ':hover': {
      ...shorthands.borderColor(semanticTokens.groupButtonPrimaryStrokeDisabled),
    },

    ':hover:active': {
      ...shorthands.borderColor(semanticTokens.groupButtonPrimaryStrokeDisabled),
    },
  },
  secondary: {
    color: semanticTokens.groupButtonDefaultTextForegroundDisabled,
  },
  subtle: {
    backgroundColor: semanticTokens.groupButtonSubtleBackgroundDisabled,
    color: semanticTokens.groupButtonSubtleTextForegroundDisabled,
    ...shorthands.borderColor(semanticTokens.groupButtonSubtleStrokeDisabled),

    [`& .${buttonClassNames.icon}`]: {
      color: semanticTokens.groupButtonSubtleIconForegroundDisabled,
    },
    ':hover': {
      backgroundColor: semanticTokens.groupButtonSubtleBackgroundDisabled,
      ...shorthands.borderColor(semanticTokens.groupButtonSubtleStrokeDisabled),
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonSubtleBackgroundDisabled,
      ...shorthands.borderColor(semanticTokens.groupButtonSubtleStrokeDisabled),
    },
  },
  transparent: {
    [`& .${buttonClassNames.icon}`]: {
      color: semanticTokens.groupButtonTransparentIconForegroundDisabled,
    },
    color: semanticTokens.groupButtonTransparentTextForegroundDisabled,
    backgroundColor: semanticTokens.groupButtonTransparentBackgroundDisabled,
    ...shorthands.borderColor(semanticTokens.groupButtonTransparentStrokeDisabled),

    ':hover': {
      backgroundColor: semanticTokens.groupButtonTransparentBackgroundDisabled,
      ...shorthands.borderColor(semanticTokens.groupButtonTransparentStrokeDisabled),
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonTransparentBackgroundDisabled,
      ...shorthands.borderColor(semanticTokens.groupButtonTransparentStrokeDisabled),
    },
  },
});

const useRootFocusStyles = makeStyles({
  // Shape variations
  circular: createCustomFocusIndicatorStyle({ borderRadius: semanticTokens.borderRadiusCircular }),
  rounded: {
    /* The rounded styles are exactly the same as the base styles. */
  },
  square: createCustomFocusIndicatorStyle({ borderRadius: semanticTokens.borderRadiusSquare }),
  // Primary styles
  primary: {
    ...createCustomFocusIndicatorStyle({
      ...shorthands.borderColor(semanticTokens.focusStrokeInner),
      boxShadow: `${tokens.shadow2}, 0 0 0 ${semanticTokens.focusStrokewidthInner} ${semanticTokens.focusStrokeInner} inset,  0 0 0 ${semanticTokens.focusStrokewidthOuter} ${semanticTokens.focusStrokeOnbrandRest} inset`,
      ':hover': {
        boxShadow: `${tokens.shadow2}, 0 0 0 ${semanticTokens.focusStrokewidthOuter} ${semanticTokens.focusStrokeInner} inset`,
        ...shorthands.borderColor(semanticTokens.focusStrokeOnbrandHover),
      },
    }),

    // BUGFIX: Mozilla specific styles (Mozilla BugID: 1857642)
    '@supports (-moz-appearance:button)': {
      ...createCustomFocusIndicatorStyle({
        // TODO: Replace shadow2 with semantic shadow
        boxShadow: `${tokens.shadow2}, 0 0 0 ${boxShadowStrokeWidthThinMoz} ${semanticTokens.focusStrokeInner} inset,  0 0 0 ${semanticTokens.focusStrokewidthOuter} ${semanticTokens.focusStrokeOnbrandRest} inset`,
        ':hover': {
          boxShadow: `${tokens.shadow2}, 0 0 0 ${boxShadowStrokeWidthThinMoz} ${semanticTokens.focusStrokeOnbrandHover} inset`,
        },
      }),
    },
  },
  // Size variations
  small: createCustomFocusIndicatorStyle({
    borderRadius: `calc(${semanticTokens.groupButtonSmallBorderradius} - ${semanticTokens.focusStrokewidthOuter})`,
  }),
  medium: {
    /* defined in base styles */
  },
  large: createCustomFocusIndicatorStyle({
    borderRadius: `calc(${semanticTokens.groupButtonLargeBorderradius} + ${semanticTokens.focusStrokewidthOuter})`,
  }),
});

const useRootIconOnlyStyles = makeStyles({
  // Size variations
  small: {
    padding: `${buttonSpacingSmallWithIcon}`,
    minWidth: '24px',
    maxWidth: '24px',
  },
  medium: {
    padding: `${semanticTokens.groupButtonMediumPaddingVertical}`,
    minWidth: '32px',
    maxWidth: '32px',
  },
  large: {
    padding: `${buttonSpacingLargeWithIcon}`,
    minWidth: '40px',
    maxWidth: '40px',
  },
});

const useIconStyles = makeStyles({
  // Size variations
  small: {
    fontSize: semanticTokens.groupButtonSmallIconSize,
    height: semanticTokens.groupButtonSmallIconSize,
    width: semanticTokens.groupButtonSmallIconSize,

    [iconSpacingVar]: `calc(${semanticTokens.groupButtonSmallGap} + ${semanticTokens.groupButtonSmallTextPaddingHorizontal})`,
  },
  medium: {
    /* defined in base styles */
  },
  large: {
    fontSize: semanticTokens.groupButtonLargeIconSize,
    height: semanticTokens.groupButtonLargeIconSize,
    width: semanticTokens.groupButtonLargeIconSize,
    //spacingHorizontalSNudge
    [iconSpacingVar]: `calc(${semanticTokens.groupButtonLargeGap} + ${semanticTokens.groupButtonLargeTextPaddingHorizontal})`,
  },

  // Icon position variations
  before: {
    marginRight: `var(${iconSpacingVar})`,
  },
  after: {
    marginLeft: `var(${iconSpacingVar})`,
  },
});

export const useSemanticButtonStyles = (_state: unknown): ButtonState => {
  'use no memo';

  const state = _state as ButtonState;

  const rootBaseClassName = useRootBaseClassName();
  const iconBaseClassName = useIconBaseClassName();

  const rootStyles = useRootStyles();
  const rootDisabledStyles = useRootDisabledStyles();
  const rootFocusStyles = useRootFocusStyles();
  const rootIconOnlyStyles = useRootIconOnlyStyles();
  const iconStyles = useIconStyles();

  const { appearance, disabled, disabledFocusable, icon, iconOnly, iconPosition, shape, size } = state;

  state.root.className = mergeClasses(
    state.root.className,
    buttonClassNames.root,
    rootBaseClassName,

    appearance && rootStyles[appearance],

    rootStyles[size],
    icon && size === 'medium' && iconPosition === 'after' && rootStyles.mediumWithIconAfter,
    icon && size === 'medium' && iconPosition === 'before' && rootStyles.mediumWithIconBefore,
    icon && size === 'small' && rootStyles.smallWithIcon,
    icon && size === 'small' && iconPosition === 'after' && rootStyles.smallWithIconAfter,
    icon && size === 'small' && iconPosition === 'before' && rootStyles.smallWithIconBefore,
    icon && size === 'large' && rootStyles.largeWithIcon,
    icon && size === 'large' && iconPosition === 'after' && rootStyles.largeWithIconAfter,
    icon && size === 'large' && iconPosition === 'before' && rootStyles.largeWithIconBefore,
    rootStyles[shape],

    // Disabled styles
    (disabled || disabledFocusable) && rootDisabledStyles.base,
    (disabled || disabledFocusable) && rootDisabledStyles.highContrast,
    appearance && (disabled || disabledFocusable) && rootDisabledStyles[appearance],

    // Focus styles
    appearance === 'primary' && rootFocusStyles.primary,
    rootFocusStyles[size],
    rootFocusStyles[shape],

    // Icon-only styles
    iconOnly && rootIconOnlyStyles[size],

    getSlotClassNameProp_unstable(state.root),
  );

  if (state.icon) {
    state.icon.className = mergeClasses(
      state.icon.className,
      buttonClassNames.icon,
      iconBaseClassName,
      !!state.root.children && iconStyles[iconPosition],
      iconStyles[size],
      getSlotClassNameProp_unstable(state.icon),
    );
  }

  return state;
};
