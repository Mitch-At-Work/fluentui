import { tokens } from '@fluentui/tokens';

export type GroupFallbacks = {
  [key: string]: {
    fluent?: string;
    generic?: string;
    primitive?: string;
  };
};

export const groupFallbacks: GroupFallbacks = {
  groupButtonFontfamily: {
    fluent: tokens.fontFamilyBase,
  },
  groupButtonDefaultBackgroundRest: {
    fluent: tokens.colorNeutralBackground1,
  },
  groupButtonDefaultBackgroundHover: {
    fluent: tokens.colorNeutralBackground1Hover,
  },
  groupButtonDefaultBackgroundPressed: {
    fluent: tokens.colorNeutralBackground1Pressed,
  },
  groupButtonDefaultBackgroundRestSelected: {
    fluent: 'var(--smtc-group-button-default-background-rest-selected)',
  },
  groupButtonDefaultBackgroundHoverSelected: {
    fluent: 'var(--smtc-group-button-default-background-hover-selected)',
  },
  groupButtonDefaultBackgroundPressedSelected: {
    fluent: 'var(--smtc-group-button-default-background-pressed-selected)',
  },
  groupButtonDefaultBackgroundDisabled: {
    fluent: 'var(--smtc-group-button-default-background-disabled)',
  },
  groupButtonPrimaryBackgroundRest: {
    fluent: 'var(--smtc-group-button-primary-background-rest)',
  },
  groupButtonPrimaryBackgroundHover: {
    fluent: 'var(--smtc-group-button-primary-background-hover)',
  },
  groupButtonPrimaryBackgroundPressed: {
    fluent: 'var(--smtc-group-button-primary-background-pressed)',
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
    fluent: 'var(--smtc-group-button-primary-background-disabled)',
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
    fluent: 'var(--smtc-group-button-outline-background-disabled)',
  },
  groupButtonSubtleBackgroundRest: {
    fluent: 'var(--smtc-group-button-subtle-background-rest)',
  },
  groupButtonSubtleBackgroundHover: {
    fluent: 'var(--smtc-group-button-subtle-background-hover)',
  },
  groupButtonSubtleBackgroundPressed: {
    fluent: 'var(--smtc-group-button-subtle-background-pressed)',
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
    fluent: 'var(--smtc-group-button-subtle-background-disabled)',
  },
  groupButtonTransparentBackgroundRest: {
    fluent: 'var(--smtc-group-button-transparent-background-rest)',
  },
  groupButtonTransparentBackgroundHover: {
    fluent: 'var(--smtc-group-button-transparent-background-hover)',
  },
  groupButtonTransparentBackgroundPressed: {
    fluent: 'var(--smtc-group-button-transparent-background-pressed)',
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
    fluent: 'var(--smtc-group-button-transparent-background-disabled)',
  },
  groupButtonDefaultStrokeRest: {
    fluent: tokens.colorNeutralStroke1,
  },
  groupButtonDefaultStrokeHover: {
    fluent: tokens.colorNeutralStroke1Hover,
  },
  groupButtonDefaultStrokePressed: {
    fluent: tokens.colorNeutralStroke1Pressed,
  },
  groupButtonDefaultStrokeRestSelected: {
    fluent: 'var(--smtc-group-button-default-stroke-rest-selected)',
  },
  groupButtonDefaultStrokeHoverSelected: {
    fluent: 'var(--smtc-group-button-default-stroke-hover-selected)',
  },
  groupButtonDefaultStrokePressedSelected: {
    fluent: 'var(--smtc-group-button-default-stroke-pressed-selected)',
  },
  groupButtonDefaultStrokeDisabled: {
    fluent: 'var(--smtc-group-button-default-stroke-disabled)',
  },
  groupButtonPrimaryStrokeRest: {
    fluent: 'var(--smtc-group-button-primary-stroke-rest)',
  },
  groupButtonPrimaryStrokeHover: {
    fluent: 'var(--smtc-group-button-primary-stroke-hover)',
  },
  groupButtonPrimaryStrokePressed: {
    fluent: 'var(--smtc-group-button-primary-stroke-pressed)',
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
    fluent: 'var(--smtc-group-button-primary-stroke-disabled)',
  },
  groupButtonOutlineStrokeRest: {
    fluent: tokens.colorNeutralStroke1,
  },
  groupButtonOutlineStrokeHover: {
    fluent: tokens.colorNeutralStroke1,
  },
  groupButtonOutlineStrokePressed: {
    fluent: 'var(--smtc-group-button-outline-stroke-pressed)',
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
    fluent: 'var(--smtc-group-button-outline-stroke-disabled)',
  },
  groupButtonSubtleStrokeRest: {
    fluent: 'var(--smtc-group-button-subtle-stroke-rest)',
  },
  groupButtonSubtleStrokeHover: {
    fluent: 'var(--smtc-group-button-subtle-stroke-hover)',
  },
  groupButtonSubtleStrokePressed: {
    fluent: 'var(--smtc-group-button-subtle-stroke-pressed)',
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
    fluent: 'var(--smtc-group-button-subtle-stroke-disabled)',
  },
  groupButtonTransparentStrokeRest: {
    fluent: 'var(--smtc-group-button-transparent-stroke-rest)',
  },
  groupButtonTransparentStrokeHover: {
    fluent: 'var(--smtc-group-button-transparent-stroke-hover)',
  },
  groupButtonTransparentStrokePressed: {
    fluent: 'var(--smtc-group-button-transparent-stroke-pressed)',
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
    fluent: 'var(--smtc-group-button-transparent-stroke-disabled)',
  },
  groupButtonDefaultShadow: {
    fluent: 'var(--smtc-group-button-default-shadow)',
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
  groupButtonSmallFontsize: {
    fluent: 'var(--smtc-group-button-small-fontsize)',
  },
  groupButtonSmallLineheight: {
    fluent: 'var(--smtc-group-button-small-lineheight)',
  },
  groupButtonSmallPaddingHorizontal: {
    fluent: tokens.spacingHorizontalS,
  },
  groupButtonSmallPaddingVertical: {
    fluent: 'var(--smtc-group-button-small-padding-vertical)',
  },
  groupButtonBaseTextPaddingHorizontal: { fluent: '0px' },
  groupButtonLargeTextPaddingHorizontal: { fluent: '0px' },
  groupButtonSmallTextPaddingHorizontal: { fluent: '0px' },
  groupButtonSmallGap: {
    fluent: 'var(--smtc-group-button-small-gap)',
  },
  groupButtonSmallBorderradius: {
    fluent: 'var(--smtc-group-button-small-borderradius)',
  },
  groupButtonSmallMinwidth: {
    fluent: '64px',
  },
  groupButtonSmallStrokewidth: {
    fluent: 'var(--smtc-group-button-small-strokewidth)',
  },
  groupButtonSmallFontweight: {
    fluent: 'var(--smtc-group-button-small-fontweight)',
  },
  groupButtonSmallFontweightSelected: {
    fluent: 'var(--smtc-group-button-small-fontweight-selected)',
  },
  groupButtonSmallStrokewidthSelected: {
    fluent: 'var(--smtc-group-button-small-strokewidth-selected)',
  },
  groupButtonBaseFontsize: {
    fluent: tokens.fontSizeBase300,
  },
  groupButtonBaseLineheight: {
    fluent: tokens.lineHeightBase300,
  },
  groupButtonBasePaddingHorizontal: {
    fluent: '12px',
  },
  groupButtonBasePaddingVertical: {
    fluent: '5px',
  },
  groupButtonBaseGap: {
    fluent: tokens.spacingHorizontalSNudge,
  },
  groupButtonBaseBorderradius: {
    fluent: tokens.borderRadiusMedium,
  },
  groupButtonBaseMinwidth: {
    fluent: '96px',
  },
  groupButtonBaseStrokewidth: {
    fluent: tokens.strokeWidthThin,
  },
  groupButtonBaseFontweight: {
    fluent: tokens.fontWeightSemibold,
  },
  groupButtonBaseFontweightSelected: {
    fluent: 'var(--smtc-group-button-base-fontweight-selected)',
  },
  groupButtonBaseStrokewidthSelected: {
    fluent: 'var(--smtc-group-button-base-strokewidth-selected)',
  },
  groupButtonLargeFontsize: {
    fluent: 'var(--smtc-group-button-large-fontsize)',
  },
  groupButtonLargeLineheight: {
    fluent: 'var(--smtc-group-button-large-lineheight)',
  },
  groupButtonLargePaddingHorizontal: {
    fluent: 'var(--smtc-group-button-large-padding-horizontal)',
  },
  groupButtonLargePaddingVertical: {
    fluent: 'var(--smtc-group-button-large-padding-vertical)',
  },
  groupButtonLargeGap: {
    fluent: 'var(--smtc-group-button-large-gap)',
  },
  groupButtonLargeBorderradius: {
    fluent: 'var(--smtc-group-button-large-borderradius)',
  },
  groupButtonLargeMinwidth: {
    fluent: '96px',
  },
  groupButtonLargeStrokewidth: {
    fluent: 'var(--smtc-group-button-large-strokewidth)',
  },
  groupButtonLargeFontweight: {
    fluent: 'var(--smtc-group-button-large-fontweight)',
  },
  groupButtonLargeFontweightSelected: {
    fluent: 'var(--smtc-group-button-large-fontweight-selected)',
  },
  groupButtonLargeStrokewidthSelected: {
    fluent: 'var(--smtc-group-button-large-strokewidth-selected)',
  },
  groupButtonSmallIconSize: {
    fluent: 'var(--smtc-group-button-small-icon-size)',
  },
  groupButtonBaseIconSize: {
    fluent: '20px',
  },
  groupButtonLargeIconSize: {
    fluent: 'var(--smtc-group-button-large-icon-size)',
  },
  groupButtonDefaultDividerColor: {
    fluent: 'var(--smtc-group-button-default-divider-color)',
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
  groupButtonDefaultTextForegroundRest: {
    fluent: tokens.colorNeutralForeground1,
  },
  groupButtonDefaultTextForegroundHover: {
    fluent: tokens.colorNeutralForeground1Hover,
  },
  groupButtonDefaultTextForegroundPressed: {
    fluent: tokens.colorNeutralForeground1Pressed,
  },
  groupButtonDefaultTextForegroundRestSelected: {
    fluent: tokens.colorNeutralForeground1Selected,
  },
  groupButtonDefaultTextForegroundHoverSelected: {
    fluent: 'var(--smtc-group-button-default-text-foreground-hover-selected)',
  },
  groupButtonDefaultTextForegroundPressedSelected: {
    fluent: 'var(--smtc-group-button-default-text-foreground-pressed-selected)',
  },
  groupButtonDefaultTextForegroundDisabled: {
    fluent: 'var(--smtc-group-button-default-text-foreground-disabled)',
  },
  groupButtonPrimaryTextForegroundRest: {
    fluent: 'var(--smtc-group-button-primary-text-foreground-rest)',
  },
  groupButtonPrimaryTextForegroundHover: {
    fluent: 'var(--smtc-group-button-primary-text-foreground-hover)',
  },
  groupButtonPrimaryTextForegroundPressed: {
    fluent: 'var(--smtc-group-button-primary-text-foreground-pressed)',
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
    fluent: 'var(--smtc-group-button-primary-text-foreground-disabled)',
  },
  groupButtonOutlineTextForegroundRest: {
    fluent: tokens.colorNeutralForeground1,
  },
  groupButtonOutlineTextForegroundHover: {
    fluent: 'var(--smtc-group-button-outline-text-foreground-hover)',
  },
  groupButtonOutlineTextForegroundPressed: {
    fluent: 'var(--smtc-group-button-outline-text-foreground-pressed)',
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
    fluent: 'var(--smtc-group-button-outline-text-foreground-disabled)',
  },
  groupButtonSubtleTextForegroundRest: {
    fluent: 'var(--smtc-group-button-subtle-text-foreground-rest)',
  },
  groupButtonSubtleTextForegroundHover: {
    fluent: 'var(--smtc-group-button-subtle-text-foreground-hover)',
  },
  groupButtonSubtleTextForegroundPressed: {
    fluent: 'var(--smtc-group-button-subtle-text-foreground-pressed)',
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
    fluent: 'var(--smtc-group-button-subtle-text-foreground-disabled)',
  },
  groupButtonTransparentTextForegroundRest: {
    fluent: 'var(--smtc-group-button-transparent-text-foreground-rest)',
  },
  groupButtonTransparentTextForegroundHover: {
    fluent: 'var(--smtc-group-button-transparent-text-foreground-hover)',
  },
  groupButtonTransparentTextForegroundPressed: {
    fluent: 'var(--smtc-group-button-transparent-text-foreground-pressed)',
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
    fluent: 'var(--smtc-group-button-transparent-text-foreground-disabled)',
  },
  groupButtonDefaultTextSecondaryForegroundRest: {
    fluent: 'var(--smtc-group-button-default-text-secondary-foreground-rest)',
  },
  groupButtonDefaultTextSecondaryForegroundHover: {
    fluent: 'var(--smtc-group-button-default-text-secondary-foreground-hover)',
  },
  groupButtonDefaultTextSecondaryForegroundPressed: {
    fluent: 'var(--smtc-group-button-default-text-secondary-foreground-pressed)',
  },
  groupButtonDefaultTextSecondaryForegroundRestSelected: {
    fluent: 'var(--smtc-group-button-default-text-secondary-foreground-rest-selected)',
  },
  groupButtonDefaultTextSecondaryForegroundHoverSelected: {
    fluent: 'var(--smtc-group-button-default-text-secondary-foreground-hover-selected)',
  },
  groupButtonDefaultTextSecondaryForegroundPressedSelected: {
    fluent: 'var(--smtc-group-button-default-text-secondary-foreground-pressed-selected)',
  },
  groupButtonDefaultTextSecondaryForegroundDisabled: {
    fluent: 'var(--smtc-group-button-default-text-secondary-foreground-disabled)',
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
};
