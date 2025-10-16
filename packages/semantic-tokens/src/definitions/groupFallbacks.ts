import { tokens } from '@fluentui/tokens';

export type GroupFallbacks = {
  [key: string]: {
    [key: string]: {
      fluent?: string | null;
      generic?: string | null;
      primitive?: string | null;
    };
  };
};

export const groupFallbacks: GroupFallbacks = {
  button: {
    groupButtonTextFontfamily: {
      fluent: tokens.fontFamilyBase,
    },
    groupButtonNeutralBackground: {
      fluent: tokens.colorNeutralBackground1,
    },
    groupButtonNeutralBackgroundHover: {
      fluent: tokens.colorNeutralBackground1Hover,
    },
    groupButtonNeutralBackgroundPressed: {
      fluent: tokens.colorNeutralBackground1Pressed,
    },
    groupButtonNeutralBackgroundSelected: {
      fluent: null,
    },
    groupButtonNeutralBackgroundHoverSelected: {
      fluent: null,
    },
    groupButtonNeutralBackgroundPressedSelected: {
      fluent: null,
    },
    groupButtonNeutralBackgroundDisabled: {
      fluent: tokens.colorNeutralBackgroundDisabled,
    },
    groupButtonPrimaryBackground: {
      fluent: tokens.colorBrandBackground,
    },
    groupButtonPrimaryBackgroundHover: {
      fluent: tokens.colorBrandBackgroundHover,
    },
    groupButtonPrimaryBackgroundPressed: {
      fluent: tokens.colorBrandBackgroundPressed,
    },
    groupButtonPrimaryBackgroundSelected: {
      fluent: null,
    },
    groupButtonPrimaryBackgroundHoverSelected: {
      fluent: null,
    },
    groupButtonPrimaryBackgroundPressedSelected: {
      fluent: null,
    },
    groupButtonPrimaryBackgroundDisabled: {
      fluent: tokens.colorNeutralBackgroundDisabled,
    },
    groupButtonOutlineBackground: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonOutlineBackgroundHover: {
      fluent: tokens.colorTransparentBackgroundHover,
    },
    groupButtonOutlineBackgroundPressed: {
      fluent: tokens.colorTransparentBackgroundPressed,
    },
    groupButtonOutlineBackgroundSelected: {
      fluent: null,
    },
    groupButtonOutlineBackgroundHoverSelected: {
      fluent: null,
    },
    groupButtonOutlineBackgroundPressedSelected: {
      fluent: null,
    },
    groupButtonOutlineBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonSubtleBackground: {
      fluent: tokens.colorSubtleBackground,
    },
    groupButtonSubtleBackgroundHover: {
      fluent: tokens.colorSubtleBackgroundHover,
    },
    groupButtonSubtleBackgroundPressed: {
      fluent: tokens.colorSubtleBackgroundPressed,
    },
    groupButtonSubtleBackgroundSelected: {
      fluent: null,
    },
    groupButtonSubtleBackgroundHoverSelected: {
      fluent: null,
    },
    groupButtonSubtleBackgroundPressedSelected: {
      fluent: null,
    },
    groupButtonSubtleBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonTransparentBackground: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonTransparentBackgroundHover: {
      fluent: tokens.colorTransparentBackgroundHover,
    },
    groupButtonTransparentBackgroundPressed: {
      fluent: tokens.colorTransparentBackgroundPressed,
    },
    groupButtonTransparentBackgroundSelected: {
      fluent: null,
    },
    groupButtonTransparentBackgroundHoverSelected: {
      fluent: null,
    },
    groupButtonTransparentBackgroundPressedSelected: {
      fluent: null,
    },
    groupButtonTransparentBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonNeutralStroke: {
      fluent: tokens.colorNeutralStroke1,
    },
    groupButtonNeutralStrokeHover: {
      fluent: tokens.colorNeutralStroke1Hover,
    },
    groupButtonNeutralStrokePressed: {
      fluent: tokens.colorNeutralStroke1Pressed,
    },
    groupButtonNeutralStrokeSelected: {
      fluent: null,
    },
    groupButtonNeutralStrokeHoverSelected: {
      fluent: null,
    },
    groupButtonNeutralStrokePressedSelected: {
      fluent: null,
    },
    groupButtonNeutralStrokeDisabled: {
      fluent: tokens.colorNeutralStrokeDisabled,
    },
    groupButtonPrimaryStroke: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonPrimaryStrokeHover: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonPrimaryStrokePressed: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonPrimaryStrokeSelected: {
      fluent: null,
    },
    groupButtonPrimaryStrokeHoverSelected: {
      fluent: null,
    },
    groupButtonPrimaryStrokePressedSelected: {
      fluent: null,
    },
    groupButtonPrimaryStrokeDisabled: {
      fluent: tokens.colorNeutralStrokeDisabled,
    },
    groupButtonOutlineStroke: {
      fluent: tokens.colorNeutralStroke1,
    },
    groupButtonOutlineStrokeHover: {
      fluent: tokens.colorNeutralStroke1Hover,
    },
    groupButtonOutlineStrokePressed: {
      fluent: tokens.colorNeutralStroke1Pressed,
    },
    groupButtonOutlineStrokeSelected: {
      fluent: null,
    },
    groupButtonOutlineStrokeHoverSelected: {
      fluent: null,
    },
    groupButtonOutlineStrokePressedSelected: {
      fluent: null,
    },
    groupButtonOutlineStrokeDisabled: {
      fluent: tokens.colorNeutralStrokeDisabled,
    },
    groupButtonSubtleStroke: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonSubtleStrokeHover: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonSubtleStrokePressed: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonSubtleStrokeSelected: {
      fluent: null,
    },
    groupButtonSubtleStrokeHoverSelected: {
      fluent: null,
    },
    groupButtonSubtleStrokePressedSelected: {
      fluent: null,
    },
    groupButtonSubtleStrokeDisabled: {
      fluent: tokens.colorTransparentStrokeDisabled,
    },
    groupButtonTransparentStroke: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonTransparentStrokeHover: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonTransparentStrokePressed: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonTransparentStrokeSelected: {
      fluent: null,
    },
    groupButtonTransparentStrokeHoverSelected: {
      fluent: null,
    },
    groupButtonTransparentStrokePressedSelected: {
      fluent: null,
    },
    groupButtonTransparentStrokeDisabled: {
      fluent: tokens.colorTransparentStrokeDisabled,
    },
    groupButtonSmallTextFontsize: {
      fluent: tokens.fontSizeBase200,
    },
    groupButtonSmallTextLineheight: {
      fluent: tokens.lineHeightBase200,
    },
    groupButtonSmallPaddingHorizontal: {
      fluent: tokens.spacingHorizontalS,
    },
    groupButtonSmallPaddingTop: {
      fluent: '3px',
    },
    groupButtonSmallPaddingBottom: {
      fluent: '3px',
    },
    groupButtonMediumTextPaddingHorizontal: { fluent: '0px' },
    groupButtonLargeTextPaddingHorizontal: { fluent: '0px' },
    groupButtonSmallTextPaddingHorizontal: { fluent: '0px' },
    groupButtonSmallGap: {
      fluent: tokens.spacingHorizontalXS,
    },
    groupButtonSmallCorner: {
      fluent: tokens.borderRadiusMedium,
    },
    groupButtonSmallMinwidth: {
      fluent: '64px',
    },
    groupButtonStrokewidth: {
      fluent: tokens.strokeWidthThin,
    },
    groupButtonSmallTextFontweight: {
      fluent: tokens.fontWeightRegular,
    },
    groupButtonMediumTextFontsize: {
      fluent: tokens.fontSizeBase300,
    },
    groupButtonMediumTextLineheight: {
      fluent: tokens.lineHeightBase300,
    },
    groupButtonMediumPaddingHorizontal: {
      fluent: tokens.spacingHorizontalM,
    },
    groupButtonMediumPaddingTop: {
      fluent: '5px',
    },
    groupButtonMediumPaddingBottom: {
      fluent: '5px',
    },
    groupButtonMediumGap: {
      fluent: tokens.spacingHorizontalSNudge,
    },
    groupButtonMediumCorner: {
      fluent: tokens.borderRadiusMedium,
    },
    groupButtonMediumMinwidth: {
      fluent: '96px',
    },
    groupButtonMediumTextFontweight: {
      fluent: tokens.fontWeightSemibold,
    },
    groupButtonLargeTextFontsize: {
      fluent: tokens.fontSizeBase400,
    },
    groupButtonLargeTextLineheight: {
      fluent: tokens.lineHeightBase400,
    },
    groupButtonLargePaddingHorizontal: {
      fluent: tokens.spacingHorizontalL,
    },
    groupButtonLargePaddingTop: {
      fluent: tokens.spacingVerticalS,
    },
    groupButtonLargePaddingBottom: {
      fluent: tokens.spacingVerticalS,
    },
    groupButtonLargeGap: {
      fluent: tokens.spacingHorizontalSNudge,
    },
    groupButtonLargeCorner: {
      fluent: tokens.borderRadiusMedium,
    },
    groupButtonLargeMinwidth: {
      fluent: '96px',
    },
    groupButtonLargeTextFontweight: {
      fluent: tokens.fontWeightSemibold,
    },
    groupButtonSmallIconSize: {
      fluent: '20px',
    },
    groupButtonMediumIconSize: {
      fluent: '20px',
    },
    groupButtonLargeIconSize: {
      fluent: '24px',
    },
    groupButtonNeutralDividerColor: {
      fluent: null,
    },
    groupButtonPrimaryDividerColor: {
      fluent: null,
    },
    groupButtonOutlineDividerColor: {
      fluent: null,
    },
    groupButtonSubtleDividerColor: {
      fluent: null,
    },
    groupButtonTransparentDividerColor: {
      fluent: null,
    },
    groupButtonNeutralTextForeground: {
      fluent: tokens.colorNeutralForeground1,
    },
    groupButtonNeutralTextForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
    },
    groupButtonNeutralTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonNeutralTextForegroundSelected: {
      fluent: tokens.colorNeutralForeground1Selected,
    },
    groupButtonNeutralTextForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonNeutralTextForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonNeutralTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonPrimaryTextForeground: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundHover: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundPressed: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundSelected: {
      fluent: null,
    },
    groupButtonPrimaryTextForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonPrimaryTextForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonPrimaryTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonOutlineTextForeground: {
      fluent: tokens.colorNeutralForeground1,
    },
    groupButtonOutlineTextForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
    },
    groupButtonOutlineTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonOutlineTextForegroundSelected: {
      fluent: null,
    },
    groupButtonOutlineTextForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonOutlineTextForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonOutlineTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonSubtleTextForeground: {
      fluent: tokens.colorNeutralForeground2,
    },
    groupButtonSubtleTextForegroundHover: {
      fluent: tokens.colorNeutralForeground2Hover,
    },
    groupButtonSubtleTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground2Pressed,
    },
    groupButtonSubtleTextForegroundSelected: {
      fluent: null,
    },
    groupButtonSubtleTextForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonSubtleTextForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonSubtleTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonTransparentTextForeground: {
      fluent: tokens.colorNeutralForeground2,
    },
    groupButtonTransparentTextForegroundHover: {
      fluent: tokens.colorNeutralForeground2BrandHover,
    },
    groupButtonTransparentTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground2BrandPressed,
    },
    groupButtonTransparentTextForegroundSelected: {
      fluent: null,
    },
    groupButtonTransparentTextForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonTransparentTextForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonTransparentTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonNeutralTextSecondaryForeground: {
      fluent: null,
    },
    groupButtonNeutralTextSecondaryForegroundHover: {
      fluent: null,
    },
    groupButtonNeutralTextSecondaryForegroundPressed: {
      fluent: null,
    },
    groupButtonNeutralTextSecondaryForegroundSelected: {
      fluent: null,
    },
    groupButtonNeutralTextSecondaryForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonNeutralTextSecondaryForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonNeutralTextSecondaryForegroundDisabled: {
      fluent: null,
    },
    groupButtonPrimaryTextSecondaryForeground: {
      fluent: null,
    },
    groupButtonPrimaryTextSecondaryForegroundHover: {
      fluent: null,
    },
    groupButtonPrimaryTextSecondaryForegroundPressed: {
      fluent: null,
    },
    groupButtonPrimaryTextSecondaryForegroundSelected: {
      fluent: null,
    },
    groupButtonPrimaryTextSecondaryForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonPrimaryTextSecondaryForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonPrimaryTextSecondaryForegroundDisabled: {
      fluent: null,
    },
    groupButtonOutlineTextSecondaryForeground: {
      fluent: null,
    },
    groupButtonOutlineTextSecondaryForegroundHover: {
      fluent: null,
    },
    groupButtonOutlineTextSecondaryForegroundPressed: {
      fluent: null,
    },
    groupButtonOutlineTextSecondaryForegroundSelected: {
      fluent: null,
    },
    groupButtonOutlineTextSecondaryForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonOutlineTextSecondaryForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonOutlineTextSecondaryForegroundDisabled: {
      fluent: null,
    },
    groupButtonSubtleTextSecondaryForeground: {
      fluent: null,
    },
    groupButtonSubtleTextSecondaryForegroundHover: {
      fluent: null,
    },
    groupButtonSubtleTextSecondaryForegroundPressed: {
      fluent: null,
    },
    groupButtonSubtleTextSecondaryForegroundSelected: {
      fluent: null,
    },
    groupButtonSubtleTextSecondaryForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonSubtleTextSecondaryForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonSubtleTextSecondaryForegroundDisabled: {
      fluent: null,
    },
    groupButtonTransparentTextSecondaryForeground: {
      fluent: null,
    },
    groupButtonTransparentTextSecondaryForegroundHover: {
      fluent: null,
    },
    groupButtonTransparentTextSecondaryForegroundPressed: {
      fluent: null,
    },
    groupButtonTransparentTextSecondaryForegroundSelected: {
      fluent: null,
    },
    groupButtonTransparentTextSecondaryForegroundHoverSelected: {
      fluent: null,
    },
    groupButtonTransparentTextSecondaryForegroundPressedSelected: {
      fluent: null,
    },
    groupButtonTransparentTextSecondaryForegroundDisabled: {
      fluent: null,
    },
    groupButtonNeutralIconForeground: {
      fluent: tokens.colorNeutralForeground1,
    },
    groupButtonNeutralIconForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
    },
    groupButtonNeutralIconForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonNeutralIconForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonPrimaryIconForeground: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryIconForegroundHover: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryIconForegroundPressed: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryIconForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonOutlineIconForeground: {
      fluent: tokens.colorNeutralForeground1,
    },
    groupButtonOutlineIconForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
    },
    groupButtonOutlineIconForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonOutlineIconForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonSubtleIconForeground: { fluent: tokens.colorNeutralForeground2 },
    groupButtonSubtleIconForegroundHover: { fluent: tokens.colorNeutralForeground2BrandHover },
    groupButtonSubtleIconForegroundPressed: { fluent: tokens.colorNeutralForeground2BrandPressed },
    groupButtonSubtleIconForegroundDisabled: { fluent: tokens.colorNeutralForegroundDisabled },
    groupButtonTransparentIconForeground: { fluent: tokens.colorNeutralForeground2 },
    groupButtonTransparentIconForegroundHover: { fluent: tokens.colorNeutralForeground2BrandHover },
    groupButtonTransparentIconForegroundPressed: { fluent: tokens.colorNeutralForeground2BrandPressed },
    groupButtonTransparentIconForegroundDisabled: { fluent: tokens.colorNeutralForegroundDisabled },
    groupButtonOutlineStrokewidthHover: {
      fluent: tokens.strokeWidthThin,
    },
    groupButtonOutlineStrokewidthPressed: {
      fluent: tokens.strokeWidthThin,
    },
    groupButtonOutlineStrokewidthSelected: {
      fluent: tokens.strokeWidthThick,
    },
  },
};
