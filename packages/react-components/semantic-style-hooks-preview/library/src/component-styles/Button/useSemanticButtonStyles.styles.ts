import { iconFilledClassName, iconRegularClassName } from '@fluentui/react-icons';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@fluentui/react-theme';
import { shorthands, makeStyles, makeResetStyles, mergeClasses } from '@griffel/react';
import * as semanticTokens from '@fluentui/semantic-tokens';
import { buttonClassNames, type ButtonState } from '@fluentui/react-button';
import { getSlotClassNameProp_unstable } from '@fluentui/react-utilities';

const iconSpacingVar = '--fui-Button__icon--spacing';

const buttonSpacingSmallWithIcon = '1px';
const buttonSpacingMedium = '5px';
const buttonSpacingLargeWithIcon = `max(0px, calc(${semanticTokens.groupButtonLargePaddingVertical} - 1px))`;

const paddingSmHorizontalNoIcon = `calc(${semanticTokens.groupButtonSmallPaddingHorizontal} + ${semanticTokens.groupButtonBaseTextPaddingHorizontal})`;
const paddingHorizontalNoIcon = `calc(${semanticTokens.groupButtonBasePaddingHorizontal} + ${semanticTokens.groupButtonBaseTextPaddingHorizontal})`;
const paddingLgHorizontalNoIcon = `calc(${semanticTokens.groupButtonLargePaddingHorizontal} + ${semanticTokens.groupButtonBaseTextPaddingHorizontal})`;

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
  border: `${semanticTokens.groupButtonBaseStrokewidth} solid ${semanticTokens.groupButtonDefaultStrokeRest}`,

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

  padding: `${semanticTokens.groupButtonBasePaddingVertical} ${paddingHorizontalNoIcon} ${semanticTokens.groupButtonBasePaddingVertical} ${paddingHorizontalNoIcon}`,
  minWidth: semanticTokens.groupButtonBaseMinwidth,
  borderRadius: semanticTokens.groupButtonBaseBorderradius,

  fontSize: semanticTokens.groupButtonBaseFontsize,
  fontWeight: semanticTokens.groupButtonBaseFontweight,
  lineHeight: semanticTokens.groupButtonBaseLineheight,

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
    borderRadius: semanticTokens.groupButtonBaseBorderradius,
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

  fontSize: semanticTokens.groupButtonBaseIconSize,
  height: semanticTokens.groupButtonBaseIconSize,
  width: semanticTokens.groupButtonBaseIconSize,

  [iconSpacingVar]: `calc(${semanticTokens.groupButtonBaseGap} + ${semanticTokens.groupButtonBaseTextPaddingHorizontal})`,
});

const useRootStyles = makeStyles({
  // Appearance variations
  outline: {
    backgroundColor: semanticTokens.groupButtonOutlineBackgroundRest,
    border: `${semanticTokens.groupButtonBaseStrokewidth} solid ${semanticTokens.groupButtonOutlineStrokeRest}`,
    color: semanticTokens.groupButtonOutlineTextForegroundRest,
    ':hover': {
      backgroundColor: semanticTokens.groupButtonOutlineBackgroundHover,
      border: `${semanticTokens.groupButtonBaseStrokewidth} solid ${semanticTokens.groupButtonOutlineStrokeHover}`,
      color: semanticTokens.groupButtonOutlineTextForegroundHover,
    },

    ':hover:active': {
      backgroundColor: semanticTokens.groupButtonOutlineBackgroundPressed,
      border: `${semanticTokens.groupButtonBaseStrokewidth} solid ${semanticTokens.groupButtonOutlineStrokePressed}`,
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
    paddingLeft: semanticTokens.groupButtonBasePaddingHorizontal,
  },
  mediumWithIconAfter: {
    paddingRight: semanticTokens.groupButtonBasePaddingHorizontal,
    paddingLeft: paddingHorizontalNoIcon,
  },
  large: {
    minWidth: semanticTokens.groupButtonLargeMinwidth,
    padding: `${semanticTokens.groupButtonLargePaddingVertical} ${paddingLgHorizontalNoIcon}`,
    borderRadius: semanticTokens.groupButtonLargeBorderradius,

    fontSize: semanticTokens.groupButtonLargeFontsize, //fontSizeBase400
    fontWeight: semanticTokens.groupButtonLargeFontweight, //fontWeightSemibold
    lineHeight: semanticTokens.groupButtonLargeLineheight, //lineheightBase400
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
    backgroundColor: semanticTokens.backgroundCtrlNeutralDisabled,
    ...shorthands.borderColor(semanticTokens.strokeCtrlOnNeutralDisabled),
    color: semanticTokens.foregroundCtrlNeutralPrimaryDisabled,
    cursor: 'not-allowed',
    [`& .${buttonClassNames.icon}`]: {
      color: semanticTokens.foregroundCtrlIconOnNeutralDisabled,
    },

    ':hover': {
      backgroundColor: semanticTokens.backgroundCtrlNeutralDisabled,
      ...shorthands.borderColor(semanticTokens.strokeCtrlOnNeutralDisabled),
      color: semanticTokens.foregroundCtrlNeutralPrimaryDisabled,

      cursor: 'not-allowed',

      [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      },
      [`& .${buttonClassNames.icon}`]: {
        color: semanticTokens.foregroundCtrlIconOnNeutralDisabled,
      },
    },

    ':hover:active': {
      backgroundColor: semanticTokens.backgroundCtrlNeutralDisabled,
      ...shorthands.borderColor(semanticTokens.strokeCtrlOnNeutralDisabled),
      color: semanticTokens.foregroundCtrlNeutralPrimaryDisabled,

      cursor: 'not-allowed',

      [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      },
      [`& .${buttonClassNames.icon}`]: {
        color: semanticTokens.foregroundCtrlIconOnNeutralDisabled,
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
    backgroundColor: tokens.colorTransparentBackground,
    color: semanticTokens.foregroundCtrlOnOutlineDisabled,
    ...shorthands.borderColor(semanticTokens.strokeCtrlOnOutlineDisabled),

    ':hover': {
      backgroundColor: tokens.colorTransparentBackground,
    },

    ':hover:active': {
      backgroundColor: tokens.colorTransparentBackground,
    },
  },
  primary: {
    ...shorthands.borderColor(semanticTokens.strokeCtrlOnBrandDisabled),

    ':hover': {
      ...shorthands.borderColor(semanticTokens.strokeCtrlOnBrandDisabled),
    },

    ':hover:active': {
      ...shorthands.borderColor(semanticTokens.strokeCtrlOnBrandDisabled),
    },
  },
  secondary: {
    color: semanticTokens.foregroundCtrlNeutralSecondaryDisabled,
  },
  subtle: {
    backgroundColor: semanticTokens.backgroundCtrlSubtleDisabled,
    color: semanticTokens.foregroundCtrlOnSubtleDisabled,
    ...shorthands.borderColor(semanticTokens.strokeCtrlOnSubtleDisabled),

    [`& .${buttonClassNames.icon}`]: {
      color: semanticTokens.foregroundCtrlIconOnSubtleDisabled,
    },
    ':hover': {
      backgroundColor: semanticTokens.backgroundCtrlSubtleDisabled,
      ...shorthands.borderColor(semanticTokens.strokeCtrlOnSubtleDisabled),
    },

    ':hover:active': {
      backgroundColor: semanticTokens.backgroundCtrlSubtleDisabled,
      ...shorthands.borderColor(semanticTokens.strokeCtrlOnSubtleDisabled),
    },
  },
  transparent: {
    [`& .${buttonClassNames.icon}`]: {
      color: semanticTokens.foregroundCtrlOnTransparentDisabled,
    },
    color: semanticTokens.foregroundCtrlOnTransparentDisabled,
    backgroundColor: tokens.colorTransparentBackground,
    ...shorthands.borderColor('transparent'),

    ':hover': {
      backgroundColor: tokens.colorTransparentBackground,
      ...shorthands.borderColor('transparent'),
    },

    ':hover:active': {
      backgroundColor: tokens.colorTransparentBackground,
      ...shorthands.borderColor('transparent'),
    },
  },
});

const useRootFocusStyles = makeStyles({
  // Shape variations
  circular: createCustomFocusIndicatorStyle({ borderRadius: semanticTokens.cornerCircular }),
  rounded: {
    /* The rounded styles are exactly the same as the base styles. */
  },
  square: createCustomFocusIndicatorStyle({ borderRadius: semanticTokens.cornerZero }),
  // Primary styles
  primary: {
    ...createCustomFocusIndicatorStyle({
      ...shorthands.borderColor(semanticTokens.ctrlFocusInnerStroke),
      boxShadow: `${tokens.shadow2}, 0 0 0 ${semanticTokens.ctrlFocusInnerStrokeWidth} ${semanticTokens.ctrlFocusInnerStroke} inset,  0 0 0 ${semanticTokens.ctrlFocusOuterStrokeWidth} ${semanticTokens.strokeCtrlOnActiveBrandRest} inset`,
      ':hover': {
        boxShadow: `${tokens.shadow2}, 0 0 0 ${semanticTokens.ctrlFocusInnerStrokeWidth} ${semanticTokens.ctrlFocusInnerStroke} inset`,
        ...shorthands.borderColor(semanticTokens.strokeCtrlOnActiveBrandHover),
      },
    }),

    // BUGFIX: Mozilla specific styles (Mozilla BugID: 1857642)
    '@supports (-moz-appearance:button)': {
      ...createCustomFocusIndicatorStyle({
        // TODO: Replace shadow2 with semantic shadow
        boxShadow: `${tokens.shadow2}, 0 0 0 ${boxShadowStrokeWidthThinMoz} ${semanticTokens.ctrlFocusInnerStroke} inset,  0 0 0 ${semanticTokens.ctrlFocusOuterStrokeWidth} ${semanticTokens.strokeCtrlOnActiveBrandRest} inset`,
        ':hover': {
          boxShadow: `${tokens.shadow2}, 0 0 0 ${boxShadowStrokeWidthThinMoz} ${semanticTokens.strokeCtrlOnActiveBrandHover} inset`,
        },
      }),
    },
  },
  // Size variations
  small: createCustomFocusIndicatorStyle({
    borderRadius: `calc(${semanticTokens.cornerCtrlSmRest} - ${semanticTokens.ctrlFocusOuterStrokeWidth})`,
  }),
  medium: {
    /* defined in base styles */
  },
  large: createCustomFocusIndicatorStyle({
    borderRadius: `calc(${semanticTokens.cornerCtrlLgRest} + ${semanticTokens.ctrlFocusOuterStrokeWidth})`,
  }),
});

const useRootIconOnlyStyles = makeStyles({
  // Size variations
  small: {
    padding: `${buttonSpacingSmallWithIcon} ${semanticTokens.paddingCtrlSmHorizontalIconOnly}`,
    minWidth: '24px',
    maxWidth: '24px',
  },
  medium: {
    padding: `${buttonSpacingMedium} ${semanticTokens.paddingCtrlHorizontalIconOnly}`,
    minWidth: '32px',
    maxWidth: '32px',
  },
  large: {
    padding: `${buttonSpacingLargeWithIcon} ${semanticTokens.paddingCtrlLgHorizontalIconOnly}`,

    minWidth: '40px',
    maxWidth: '40px',
  },
});

const useIconStyles = makeStyles({
  // Size variations
  small: {
    fontSize: semanticTokens.sizeCtrlSmIcon,
    height: semanticTokens.sizeCtrlSmIcon,
    width: semanticTokens.sizeCtrlSmIcon,

    [iconSpacingVar]: `calc(${semanticTokens.gapInsideCtrlSmDefault} + ${semanticTokens.paddingCtrlTextSide})`,
  },
  medium: {
    /* defined in base styles */
  },
  large: {
    fontSize: semanticTokens.sizeCtrlLgIcon,
    height: semanticTokens.sizeCtrlLgIcon,
    width: semanticTokens.sizeCtrlLgIcon,

    [iconSpacingVar]: `calc(${semanticTokens.gapInsideCtrlLgDefault} + ${semanticTokens.paddingCtrlTextSide})`,
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
