import { tokens } from '@fluentui/tokens';

export type GroupFallbacks = {
  [key: string]: {
    [key: string]: {
      fluent?: string;
      generic?: string;
      primitive?: string;
    };
  };
};

export const groupFallbacks: GroupFallbacks = {
  button: {
    groupButtonTextFontfamily: {
      fluent: tokens.fontFamilyBase,
    },
    groupButtonNeutralBackgroundRest: {
      fluent: tokens.colorNeutralBackground1,
    },
    groupButtonNeutralBackgroundHover: {
      fluent: tokens.colorNeutralBackground1Hover,
    },
    groupButtonNeutralBackgroundPressed: {
      fluent: tokens.colorNeutralBackground1Pressed,
    },
    groupButtonNeutralBackgroundRestSelected: {
      fluent: 'var(--smtc-group-button-neutral-background-rest-selected)',
    },
    groupButtonNeutralBackgroundHoverSelected: {
      fluent: 'var(--smtc-group-button-neutral-background-hover-selected)',
    },
    groupButtonNeutralBackgroundPressedSelected: {
      fluent: 'var(--smtc-group-button-neutral-background-pressed-selected)',
    },
    groupButtonNeutralBackgroundDisabled: {
      fluent: tokens.colorNeutralBackgroundDisabled,
    },
    groupButtonPrimaryBackgroundRest: {
      fluent: tokens.colorBrandBackground,
    },
    groupButtonPrimaryBackgroundHover: {
      fluent: tokens.colorBrandBackgroundHover,
    },
    groupButtonPrimaryBackgroundPressed: {
      fluent: tokens.colorBrandBackgroundPressed,
    },
    groupButtonPrimaryBackgroundRestSelected: {
      fluent: 'var(--smtc-group-button-primary-background-rest-selected)',
    },
    groupButtonPrimaryBackgroundHoverSelected: {
      fluent: 'var(--smtc-group-button-primary-background-hover-selected)',
    },
    groupButtonPrimaryBackgroundPressedSelected: {
      fluent: 'var(--smtc-group-button-primary-background-pressed-selected)',
    },
    groupButtonPrimaryBackgroundDisabled: {
      fluent: tokens.colorNeutralBackgroundDisabled,
    },
    groupButtonOutlineBackgroundRest: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonOutlineBackgroundHover: {
      fluent: tokens.colorTransparentBackgroundHover,
    },
    groupButtonOutlineBackgroundPressed: {
      fluent: tokens.colorTransparentBackgroundPressed,
    },
    groupButtonOutlineBackgroundRestSelected: {
      fluent: 'var(--smtc-group-button-outline-background-rest-selected)',
    },
    groupButtonOutlineBackgroundHoverSelected: {
      fluent: 'var(--smtc-group-button-outline-background-hover-selected)',
    },
    groupButtonOutlineBackgroundPressedSelected: {
      fluent: 'var(--smtc-group-button-outline-background-pressed-selected)',
    },
    groupButtonOutlineBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonSubtleBackgroundRest: {
      fluent: tokens.colorSubtleBackground,
    },
    groupButtonSubtleBackgroundHover: {
      fluent: tokens.colorSubtleBackgroundHover,
    },
    groupButtonSubtleBackgroundPressed: {
      fluent: tokens.colorSubtleBackgroundPressed,
    },
    groupButtonSubtleBackgroundRestSelected: {
      fluent: 'var(--smtc-group-button-subtle-background-rest-selected)',
    },
    groupButtonSubtleBackgroundHoverSelected: {
      fluent: 'var(--smtc-group-button-subtle-background-hover-selected)',
    },
    groupButtonSubtleBackgroundPressedSelected: {
      fluent: 'var(--smtc-group-button-subtle-background-pressed-selected)',
    },
    groupButtonSubtleBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonTransparentBackgroundRest: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonTransparentBackgroundHover: {
      fluent: tokens.colorTransparentBackgroundHover,
    },
    groupButtonTransparentBackgroundPressed: {
      fluent: tokens.colorTransparentBackgroundPressed,
    },
    groupButtonTransparentBackgroundRestSelected: {
      fluent: 'var(--smtc-group-button-transparent-background-rest-selected)',
    },
    groupButtonTransparentBackgroundHoverSelected: {
      fluent: 'var(--smtc-group-button-transparent-background-hover-selected)',
    },
    groupButtonTransparentBackgroundPressedSelected: {
      fluent: 'var(--smtc-group-button-transparent-background-pressed-selected)',
    },
    groupButtonTransparentBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
    },
    groupButtonNeutralStrokeRest: {
      fluent: tokens.colorNeutralStroke1,
    },
    groupButtonNeutralStrokeHover: {
      fluent: tokens.colorNeutralStroke1Hover,
    },
    groupButtonNeutralStrokePressed: {
      fluent: tokens.colorNeutralStroke1Pressed,
    },
    groupButtonNeutralStrokeRestSelected: {
      fluent: 'var(--smtc-group-button-neutral-stroke-rest-selected)',
    },
    groupButtonNeutralStrokeHoverSelected: {
      fluent: 'var(--smtc-group-button-neutral-stroke-hover-selected)',
    },
    groupButtonNeutralStrokePressedSelected: {
      fluent: 'var(--smtc-group-button-neutral-stroke-pressed-selected)',
    },
    groupButtonNeutralStrokeDisabled: {
      fluent: tokens.colorNeutralStrokeDisabled,
    },
    groupButtonPrimaryStrokeRest: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonPrimaryStrokeHover: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonPrimaryStrokePressed: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonPrimaryStrokeRestSelected: {
      fluent: 'var(--smtc-group-button-primary-stroke-rest-selected)',
    },
    groupButtonPrimaryStrokeHoverSelected: {
      fluent: 'var(--smtc-group-button-primary-stroke-hover-selected)',
    },
    groupButtonPrimaryStrokePressedSelected: {
      fluent: 'var(--smtc-group-button-primary-stroke-pressed-selected)',
    },
    groupButtonPrimaryStrokeDisabled: {
      fluent: tokens.colorNeutralStrokeDisabled,
    },
    groupButtonOutlineStrokeRest: {
      fluent: tokens.colorNeutralStroke1,
    },
    groupButtonOutlineStrokeHover: {
      fluent: tokens.colorNeutralStroke1Hover,
    },
    groupButtonOutlineStrokePressed: {
      fluent: tokens.colorNeutralStroke1Pressed,
    },
    groupButtonOutlineStrokeRestSelected: {
      fluent: 'var(--smtc-group-button-outline-stroke-rest-selected)',
    },
    groupButtonOutlineStrokeHoverSelected: {
      fluent: 'var(--smtc-group-button-outline-stroke-hover-selected)',
    },
    groupButtonOutlineStrokePressedSelected: {
      fluent: 'var(--smtc-group-button-outline-stroke-pressed-selected)',
    },
    groupButtonOutlineStrokeDisabled: {
      fluent: tokens.colorNeutralStrokeDisabled,
    },
    groupButtonSubtleStrokeRest: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonSubtleStrokeHover: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonSubtleStrokePressed: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonSubtleStrokeRestSelected: {
      fluent: 'var(--smtc-group-button-subtle-stroke-rest-selected)',
    },
    groupButtonSubtleStrokeHoverSelected: {
      fluent: 'var(--smtc-group-button-subtle-stroke-hover-selected)',
    },
    groupButtonSubtleStrokePressedSelected: {
      fluent: 'var(--smtc-group-button-subtle-stroke-pressed-selected)',
    },
    groupButtonSubtleStrokeDisabled: {
      fluent: tokens.colorTransparentStrokeDisabled,
    },
    groupButtonTransparentStrokeRest: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonTransparentStrokeHover: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonTransparentStrokePressed: {
      fluent: tokens.colorTransparentStroke,
    },
    groupButtonTransparentStrokeRestSelected: {
      fluent: 'var(--smtc-group-button-transparent-stroke-rest-selected)',
    },
    groupButtonTransparentStrokeHoverSelected: {
      fluent: 'var(--smtc-group-button-transparent-stroke-hover-selected)',
    },
    groupButtonTransparentStrokePressedSelected: {
      fluent: 'var(--smtc-group-button-transparent-stroke-pressed-selected)',
    },
    groupButtonTransparentStrokeDisabled: {
      fluent: tokens.colorTransparentStrokeDisabled,
    },
    /* We cannot enable shadows in V9 button (for now), as it is used for secondary focus border */
    groupButtonNeutralShadow: {
      fluent: 'var(--smtc-group-button-neutral-shadow)',
    },
    groupButtonPrimaryShadow: {
      fluent: 'var(--smtc-group-button-primary-shadow)',
    },
    groupButtonOutlineShadow: {
      fluent: 'var(--smtc-group-button-outline-shadow)',
    },
    groupButtonSubtleShadow: {
      fluent: 'var(--smtc-group-button-subtle-shadow)',
    },
    groupButtonTransparentShadow: {
      fluent: 'var(--smtc-group-button-transparent-shadow)',
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
    groupButtonSmallPaddingVertical: {
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
    groupButtonMediumPaddingVertical: {
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
    groupButtonLargePaddingVertical: {
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
      fluent: 'var(--smtc-group-button-neutral-divider-color)',
    },
    groupButtonPrimaryDividerColor: {
      fluent: 'var(--smtc-group-button-primary-divider-color)',
    },
    groupButtonOutlineDividerColor: {
      fluent: 'var(--smtc-group-button-outline-divider-color)',
    },
    groupButtonSubtleDividerColor: {
      fluent: 'var(--smtc-group-button-subtle-divider-color)',
    },
    groupButtonTransparentDividerColor: {
      fluent: 'var(--smtc-group-button-transparent-divider-color)',
    },
    groupButtonNeutralTextForegroundRest: {
      fluent: tokens.colorNeutralForeground1,
    },
    groupButtonNeutralTextForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
    },
    groupButtonNeutralTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonNeutralTextForegroundRestSelected: {
      fluent: tokens.colorNeutralForeground1Selected,
    },
    groupButtonNeutralTextForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-neutral-text-foreground-hover-selected)',
    },
    groupButtonNeutralTextForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-neutral-text-foreground-pressed-selected)',
    },
    groupButtonNeutralTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonPrimaryTextForegroundRest: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundHover: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundPressed: {
      fluent: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-primary-text-foreground-rest-selected)',
    },
    groupButtonPrimaryTextForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-primary-text-foreground-hover-selected)',
    },
    groupButtonPrimaryTextForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-primary-text-foreground-pressed-selected)',
    },
    groupButtonPrimaryTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonOutlineTextForegroundRest: {
      fluent: tokens.colorNeutralForeground1,
    },
    groupButtonOutlineTextForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
    },
    groupButtonOutlineTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonOutlineTextForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-outline-text-foreground-rest-selected)',
    },
    groupButtonOutlineTextForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-outline-text-foreground-hover-selected)',
    },
    groupButtonOutlineTextForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-outline-text-foreground-pressed-selected)',
    },
    groupButtonOutlineTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonSubtleTextForegroundRest: {
      fluent: tokens.colorNeutralForeground2,
    },
    groupButtonSubtleTextForegroundHover: {
      fluent: tokens.colorNeutralForeground2Hover,
    },
    groupButtonSubtleTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground2Pressed,
    },
    groupButtonSubtleTextForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-subtle-text-foreground-rest-selected)',
    },
    groupButtonSubtleTextForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-subtle-text-foreground-hover-selected)',
    },
    groupButtonSubtleTextForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-subtle-text-foreground-pressed-selected)',
    },
    groupButtonSubtleTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonTransparentTextForegroundRest: {
      fluent: tokens.colorNeutralForeground2,
    },
    groupButtonTransparentTextForegroundHover: {
      fluent: tokens.colorNeutralForeground2BrandHover,
    },
    groupButtonTransparentTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground2BrandPressed,
    },
    groupButtonTransparentTextForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-transparent-text-foreground-rest-selected)',
    },
    groupButtonTransparentTextForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-transparent-text-foreground-hover-selected)',
    },
    groupButtonTransparentTextForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-transparent-text-foreground-pressed-selected)',
    },
    groupButtonTransparentTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonNeutralTextSecondaryForegroundRest: {
      fluent: 'var(--smtc-group-button-neutral-text-secondary-foreground-rest)',
    },
    groupButtonNeutralTextSecondaryForegroundHover: {
      fluent: 'var(--smtc-group-button-neutral-text-secondary-foreground-hover)',
    },
    groupButtonNeutralTextSecondaryForegroundPressed: {
      fluent: 'var(--smtc-group-button-neutral-text-secondary-foreground-pressed)',
    },
    groupButtonNeutralTextSecondaryForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-neutral-text-secondary-foreground-rest-selected)',
    },
    groupButtonNeutralTextSecondaryForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-neutral-text-secondary-foreground-hover-selected)',
    },
    groupButtonNeutralTextSecondaryForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-neutral-text-secondary-foreground-pressed-selected)',
    },
    groupButtonNeutralTextSecondaryForegroundDisabled: {
      fluent: 'var(--smtc-group-button-neutral-text-secondary-foreground-disabled)',
    },
    groupButtonPrimaryTextSecondaryForegroundRest: {
      fluent: 'var(--smtc-group-button-primary-text-secondary-foreground-rest)',
    },
    groupButtonPrimaryTextSecondaryForegroundHover: {
      fluent: 'var(--smtc-group-button-primary-text-secondary-foreground-hover)',
    },
    groupButtonPrimaryTextSecondaryForegroundPressed: {
      fluent: 'var(--smtc-group-button-primary-text-secondary-foreground-pressed)',
    },
    groupButtonPrimaryTextSecondaryForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-primary-text-secondary-foreground-rest-selected)',
    },
    groupButtonPrimaryTextSecondaryForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-primary-text-secondary-foreground-hover-selected)',
    },
    groupButtonPrimaryTextSecondaryForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-primary-text-secondary-foreground-pressed-selected)',
    },
    groupButtonPrimaryTextSecondaryForegroundDisabled: {
      fluent: 'var(--smtc-group-button-primary-text-secondary-foreground-disabled)',
    },
    groupButtonOutlineTextSecondaryForegroundRest: {
      fluent: 'var(--smtc-group-button-outline-text-secondary-foreground-rest)',
    },
    groupButtonOutlineTextSecondaryForegroundHover: {
      fluent: 'var(--smtc-group-button-outline-text-secondary-foreground-hover)',
    },
    groupButtonOutlineTextSecondaryForegroundPressed: {
      fluent: 'var(--smtc-group-button-outline-text-secondary-foreground-pressed)',
    },
    groupButtonOutlineTextSecondaryForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-outline-text-secondary-foreground-rest-selected)',
    },
    groupButtonOutlineTextSecondaryForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-outline-text-secondary-foreground-hover-selected)',
    },
    groupButtonOutlineTextSecondaryForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-outline-text-secondary-foreground-pressed-selected)',
    },
    groupButtonOutlineTextSecondaryForegroundDisabled: {
      fluent: 'var(--smtc-group-button-outline-text-secondary-foreground-disabled)',
    },
    groupButtonSubtleTextSecondaryForegroundRest: {
      fluent: 'var(--smtc-group-button-subtle-text-secondary-foreground-rest)',
    },
    groupButtonSubtleTextSecondaryForegroundHover: {
      fluent: 'var(--smtc-group-button-subtle-text-secondary-foreground-hover)',
    },
    groupButtonSubtleTextSecondaryForegroundPressed: {
      fluent: 'var(--smtc-group-button-subtle-text-secondary-foreground-pressed)',
    },
    groupButtonSubtleTextSecondaryForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-subtle-text-secondary-foreground-rest-selected)',
    },
    groupButtonSubtleTextSecondaryForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-subtle-text-secondary-foreground-hover-selected)',
    },
    groupButtonSubtleTextSecondaryForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-subtle-text-secondary-foreground-pressed-selected)',
    },
    groupButtonSubtleTextSecondaryForegroundDisabled: {
      fluent: 'var(--smtc-group-button-subtle-text-secondary-foreground-disabled)',
    },
    groupButtonTransparentTextSecondaryForegroundRest: {
      fluent: 'var(--smtc-group-button-transparent-text-secondary-foreground-rest)',
    },
    groupButtonTransparentTextSecondaryForegroundHover: {
      fluent: 'var(--smtc-group-button-transparent-text-secondary-foreground-hover)',
    },
    groupButtonTransparentTextSecondaryForegroundPressed: {
      fluent: 'var(--smtc-group-button-transparent-text-secondary-foreground-pressed)',
    },
    groupButtonTransparentTextSecondaryForegroundRestSelected: {
      fluent: 'var(--smtc-group-button-transparent-text-secondary-foreground-rest-selected)',
    },
    groupButtonTransparentTextSecondaryForegroundHoverSelected: {
      fluent: 'var(--smtc-group-button-transparent-text-secondary-foreground-hover-selected)',
    },
    groupButtonTransparentTextSecondaryForegroundPressedSelected: {
      fluent: 'var(--smtc-group-button-transparent-text-secondary-foreground-pressed-selected)',
    },
    groupButtonTransparentTextSecondaryForegroundDisabled: {
      fluent: 'var(--smtc-group-button-transparent-text-secondary-foreground-disabled)',
    },
    groupButtonNeutralIconForegroundRest: {
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
    groupButtonPrimaryIconForegroundRest: {
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
    groupButtonOutlineIconForegroundRest: {
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
    groupButtonSubtleIconForegroundRest: { fluent: tokens.colorNeutralForeground2 },
    groupButtonSubtleIconForegroundHover: { fluent: tokens.colorNeutralForeground2BrandHover },
    groupButtonSubtleIconForegroundPressed: { fluent: tokens.colorNeutralForeground2BrandPressed },
    groupButtonSubtleIconForegroundDisabled: { fluent: tokens.colorNeutralForegroundDisabled },
    groupButtonTransparentIconForegroundRest: { fluent: tokens.colorNeutralForeground2 },
    groupButtonTransparentIconForegroundHover: { fluent: tokens.colorNeutralForeground2BrandHover },
    groupButtonTransparentIconForegroundPressed: { fluent: tokens.colorNeutralForeground2BrandPressed },
    groupButtonTransparentIconForegroundDisabled: { fluent: tokens.colorNeutralForegroundDisabled },
  },
};
