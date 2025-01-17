const {getMinimalPackageList} = require('../getMinimalPackageList');

const tokenPackageMap = {
  colorBackgroundPrimaryLightest: ['@twilio-paste/pagination'],
  colorBackgroundUser: ['@twilio-paste/avatar'],
  colorBackgroundPrimaryStronger: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/button'],
  colorBackgroundDestructiveStronger: ['@twilio-paste/button'],
  colorBackgroundPrimaryWeaker: ['@twilio-paste/button'],
  colorBackgroundDestructiveWeaker: ['@twilio-paste/button'],
  colorBackgroundWarningWeakest: ['@twilio-paste/alert'],
  colorBackgroundInverseStrong: ['@twilio-paste/button', '@twilio-paste/input-box'],
  colorBackgroundStrong: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/disclosure'],
  colorBackgroundDestructive: ['@twilio-paste/button'],
  colorBackgroundPrimary: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/button'],
  colorBackgroundPrimaryWeakest: [
    '@twilio-paste/button',
    '@twilio-paste/checkbox',
    '@twilio-paste/combobox',
    '@twilio-paste/pagination',
  ],
  colorBackgroundSuccess: ['@twilio-paste/card'],
  colorBackgroundDestructiveWeakest: ['@twilio-paste/button'],
  colorBackgroundRowStriped: ['@twilio-paste/table'],
  colorBackgroundPrimaryStrongest: ['@twilio-paste/button'],
  colorBackgroundDestructiveStrongest: ['@twilio-paste/button'],
  colorBackgroundErrorStrong: ['@twilio-paste/base-radio-checkbox'],
  colorBackgroundError: ['@twilio-paste/base-radio-checkbox'],
  colorBackgroundNeutralWeakest: ['@twilio-paste/alert'],
  colorBackgroundErrorWeakest: ['@twilio-paste/alert'],
  colorBackgroundRequired: ['@twilio-paste/label'],
  colorBackgroundBody: [
    '@twilio-paste/button',
    '@twilio-paste/base-radio-checkbox',
    '@twilio-paste/disclosure',
    '@twilio-paste/card',
    '@twilio-paste/menu',
    '@twilio-paste/popover',
    '@twilio-paste/radio-group',
    '@twilio-paste/toast',
    '@twilio-paste/table',
    '@twilio-paste/combobox',
    '@twilio-paste/input-box',
    '@twilio-paste/modal',
  ],
  colorBackgroundPrimaryStrong: ['@twilio-paste/base-radio-checkbox'],
  colorBackgroundDestructiveWeak: ['@twilio-paste/button'],
  colorBackground: [
    '@twilio-paste/disclosure',
    '@twilio-paste/checkbox',
    '@twilio-paste/table',
    '@twilio-paste/input-box',
  ],
  colorBackgroundPrimaryWeak: ['@twilio-paste/button'],
  colorBackgroundStronger: [],
  colorBackgroundBrandHighlight: [],
  colorBackgroundStrongest: ['@twilio-paste/radio-group'],
  colorBackgroundBodyInverse: ['@twilio-paste/tooltip'],
  colorBackgroundInverse: ['@twilio-paste/button', '@twilio-paste/input-box'],
  colorBackgroundOverlay: ['@twilio-paste/modal'],
  colorBorderWarningWeak: ['@twilio-paste/alert', '@twilio-paste/toast'],
  colorBorderPrimaryStronger: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/tabs'],
  colorBorderPrimary: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/tabs', '@twilio-paste/pagination'],
  colorBorderStrong: ['@twilio-paste/tooltip'],
  colorBorderWeak: [
    '@twilio-paste/menu',
    '@twilio-paste/separator',
    '@twilio-paste/tabs',
    '@twilio-paste/combobox',
    '@twilio-paste/modal',
  ],
  colorBorderNeutral: ['@twilio-paste/alert', '@twilio-paste/toast'],
  colorBorderError: ['@twilio-paste/base-radio-checkbox'],
  colorBorderErrorStrong: ['@twilio-paste/base-radio-checkbox'],
  colorBorderErrorWeak: ['@twilio-paste/alert', '@twilio-paste/toast'],
  colorBorder: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/pagination'],
  colorBorderInverseWeaker: ['@twilio-paste/input-box'],
  colorBorderSuccessWeak: ['@twilio-paste/toast'],
  colorBorderPrimaryStrong: ['@twilio-paste/base-radio-checkbox'],
  colorBorderInverse: ['@twilio-paste/input-box'],
  colorBorderWeaker: [
    '@twilio-paste/base-radio-checkbox',
    '@twilio-paste/card',
    '@twilio-paste/popover',
    '@twilio-paste/table',
    '@twilio-paste/toast',
    '@twilio-paste/input-box',
    '@twilio-paste/modal',
  ],
  borderRadius0: ['@twilio-paste/disclosure'],
  borderRadius10: [
    '@twilio-paste/button',
    '@twilio-paste/checkbox',
    '@twilio-paste/disclosure',
    '@twilio-paste/pagination',
  ],
  borderRadius20: [
    '@twilio-paste/card',
    '@twilio-paste/button',
    '@twilio-paste/checkbox',
    '@twilio-paste/disclosure',
    '@twilio-paste/input',
    '@twilio-paste/menu',
    '@twilio-paste/popover',
    '@twilio-paste/select',
    '@twilio-paste/textarea',
    '@twilio-paste/toast',
    '@twilio-paste/tooltip',
    '@twilio-paste/combobox',
    '@twilio-paste/input-box',
    '@twilio-paste/modal',
  ],
  borderRadiusCircle: [
    '@twilio-paste/avatar',
    '@twilio-paste/label',
    '@twilio-paste/radio-group',
    '@twilio-paste/pagination',
  ],
  borderWidth0: [
    '@twilio-paste/button',
    '@twilio-paste/inline-control-group',
    '@twilio-paste/label',
    '@twilio-paste/separator',
    '@twilio-paste/table',
  ],
  borderWidth10: [
    '@twilio-paste/base-radio-checkbox',
    '@twilio-paste/menu',
    '@twilio-paste/popover',
    '@twilio-paste/separator',
    '@twilio-paste/table',
    '@twilio-paste/tabs',
    '@twilio-paste/toast',
    '@twilio-paste/tooltip',
    '@twilio-paste/combobox',
    '@twilio-paste/input-box',
    '@twilio-paste/modal',
    '@twilio-paste/pagination',
  ],
  borderWidth20: ['@twilio-paste/alert', '@twilio-paste/card', '@twilio-paste/table', '@twilio-paste/tabs'],
  borderWidth30: ['@twilio-paste/toast'],
  shadow: [
    '@twilio-paste/button',
    '@twilio-paste/menu',
    '@twilio-paste/tooltip',
    '@twilio-paste/combobox',
    '@twilio-paste/input-box',
    '@twilio-paste/pagination',
  ],
  shadowBorderDestructiveStronger: ['@twilio-paste/button'],
  shadowBorderPrimaryStronger: ['@twilio-paste/button', '@twilio-paste/input-box'],
  shadowBorderDestructiveWeaker: ['@twilio-paste/button'],
  shadowBorderPrimaryWeaker: ['@twilio-paste/button'],
  shadowBorderInverseStrong: ['@twilio-paste/button'],
  shadowBorderStrong: ['@twilio-paste/input-box'],
  shadowFocus: [
    '@twilio-paste/anchor',
    '@twilio-paste/base-radio-checkbox',
    '@twilio-paste/button',
    '@twilio-paste/disclosure',
    '@twilio-paste/tabs',
    '@twilio-paste/input-box',
    '@twilio-paste/pagination',
  ],
  shadowFocusInverse: ['@twilio-paste/anchor', '@twilio-paste/button', '@twilio-paste/input-box'],
  shadowBorderPrimary: ['@twilio-paste/button'],
  shadowBorderDestructive: ['@twilio-paste/button'],
  shadowHigh: ['@twilio-paste/toast'],
  shadowBorderErrorStrong: ['@twilio-paste/input-box'],
  shadowBorderPrimaryStrongest: ['@twilio-paste/button'],
  shadowBorderDestructiveStrongest: ['@twilio-paste/button'],
  shadowBorderErrorWeak: ['@twilio-paste/input-box'],
  shadowBorderError: ['@twilio-paste/input-box'],
  shadowBorderDestructiveStrong: [],
  shadowBorderInverseWeaker: ['@twilio-paste/button', '@twilio-paste/input-box'],
  shadowBorderPrimaryStrong: ['@twilio-paste/input-box'],
  shadowBorderPrimaryWeak: ['@twilio-paste/button'],
  shadowBorderDestructiveWeak: ['@twilio-paste/button'],
  shadowBorder: ['@twilio-paste/input-box'],
  shadowBorderInverse: ['@twilio-paste/button', '@twilio-paste/input-box'],
  shadowCard: ['@twilio-paste/popover', '@twilio-paste/modal'],
  shadowBorderInverseStrongest: ['@twilio-paste/button', '@twilio-paste/input-box'],
  fontFamilyText: ['@twilio-paste/button', '@twilio-paste/menu', '@twilio-paste/select', '@twilio-paste/pagination'],
  fontSize90: ['@twilio-paste/heading'],
  fontSize70: ['@twilio-paste/avatar', '@twilio-paste/heading', '@twilio-paste/popover'],
  fontSize60: ['@twilio-paste/avatar', '@twilio-paste/heading'],
  fontSize50: ['@twilio-paste/tooltip'],
  fontSize40: ['@twilio-paste/avatar', '@twilio-paste/heading'],
  fontSize30: [
    '@twilio-paste/avatar',
    '@twilio-paste/button',
    '@twilio-paste/heading',
    '@twilio-paste/help-text',
    '@twilio-paste/input',
    '@twilio-paste/menu',
    '@twilio-paste/label',
    '@twilio-paste/paragraph',
    '@twilio-paste/select',
    '@twilio-paste/list',
    '@twilio-paste/tabs',
    '@twilio-paste/table',
    '@twilio-paste/textarea',
    '@twilio-paste/text',
    '@twilio-paste/pagination',
  ],
  fontSize20: ['@twilio-paste/avatar', '@twilio-paste/breadcrumb', '@twilio-paste/heading'],
  fontSize10: ['@twilio-paste/avatar'],
  fontWeightNormal: ['@twilio-paste/list', '@twilio-paste/menu', '@twilio-paste/paragraph', '@twilio-paste/pagination'],
  fontWeightMedium: [
    '@twilio-paste/base-radio-checkbox',
    '@twilio-paste/checkbox',
    '@twilio-paste/input',
    '@twilio-paste/select',
    '@twilio-paste/textarea',
  ],
  fontWeightSemibold: ['@twilio-paste/button', '@twilio-paste/table', '@twilio-paste/tabs'],
  fontWeightBold: [
    '@twilio-paste/avatar',
    '@twilio-paste/heading',
    '@twilio-paste/label',
    '@twilio-paste/menu',
    '@twilio-paste/combobox',
  ],
  lineHeight90: ['@twilio-paste/heading'],
  lineHeight70: ['@twilio-paste/heading'],
  lineHeight60: ['@twilio-paste/heading'],
  lineHeight50: ['@twilio-paste/select'],
  lineHeight40: ['@twilio-paste/heading', '@twilio-paste/list', '@twilio-paste/paragraph'],
  lineHeight30: [
    '@twilio-paste/button',
    '@twilio-paste/help-text',
    '@twilio-paste/heading',
    '@twilio-paste/label',
    '@twilio-paste/menu',
    '@twilio-paste/table',
    '@twilio-paste/text',
    '@twilio-paste/pagination',
  ],
  lineHeight20: [
    '@twilio-paste/breadcrumb',
    '@twilio-paste/button',
    '@twilio-paste/heading',
    '@twilio-paste/input',
    '@twilio-paste/select',
    '@twilio-paste/textarea',
    '@twilio-paste/input-box',
  ],
  sizeIcon80: ['@twilio-paste/avatar'],
  sizeIcon70: ['@twilio-paste/avatar', '@twilio-paste/disclosure'],
  sizeIcon60: ['@twilio-paste/avatar', '@twilio-paste/disclosure', '@twilio-paste/modal'],
  sizeIcon50: ['@twilio-paste/avatar'],
  size80: ['@twilio-paste/modal'],
  size0: [
    '@twilio-paste/media-object',
    '@twilio-paste/grid',
    '@twilio-paste/flex',
    '@twilio-paste/checkbox',
    '@twilio-paste/radio-group',
  ],
  sizeIcon40: ['@twilio-paste/avatar', '@twilio-paste/disclosure'],
  sizeIcon30: [
    '@twilio-paste/avatar',
    '@twilio-paste/disclosure',
    '@twilio-paste/label',
    '@twilio-paste/menu',
    '@twilio-paste/popover',
    '@twilio-paste/select',
    '@twilio-paste/combobox',
  ],
  sizeSquare180: [],
  size60: ['@twilio-paste/modal'],
  sizeIcon20: [
    '@twilio-paste/alert',
    '@twilio-paste/avatar',
    '@twilio-paste/disclosure',
    '@twilio-paste/help-text',
    '@twilio-paste/spinner',
    '@twilio-paste/toast',
  ],
  sizeSquare170: [],
  sizeIcon10: ['@twilio-paste/avatar', '@twilio-paste/checkbox'],
  sizeSquare25: ['@twilio-paste/radio-group'],
  sizeSquare160: [],
  size50: [],
  sizeIcon110: ['@twilio-paste/avatar'],
  sizeSquare150: [],
  size40: ['@twilio-paste/alert-dialog', '@twilio-paste/tabs', '@twilio-paste/toast'],
  sizeIcon100: ['@twilio-paste/avatar'],
  sizeSquare140: [],
  size30: [
    '@twilio-paste/menu',
    '@twilio-paste/popover',
    '@twilio-paste/textarea',
    '@twilio-paste/tooltip',
    '@twilio-paste/combobox',
  ],
  sizeSquare130: ['@twilio-paste/tabs'],
  size20: ['@twilio-paste/menu', '@twilio-paste/tabs'],
  sizeSquare120: [],
  size10: [],
  sizeSquare110: [],
  sizeSquare0: [],
  sizeSquare100: [],
  sizeSquare200: [],
  sizeSidebar: [],
  sizeSquare90: [],
  sizeSquare80: ['@twilio-paste/pagination'],
  sizeSquare70: [],
  sizeSquare60: [],
  sizeSquare50: ['@twilio-paste/base-radio-checkbox'],
  sizeIcon90: ['@twilio-paste/avatar', '@twilio-paste/disclosure'],
  space70: [
    '@twilio-paste/inline-control-group',
    '@twilio-paste/heading',
    '@twilio-paste/menu',
    '@twilio-paste/list',
    '@twilio-paste/paragraph',
    '@twilio-paste/popover',
    '@twilio-paste/tabs',
    '@twilio-paste/combobox',
    '@twilio-paste/modal',
  ],
  spaceNegative100: [],
  space60: [
    '@twilio-paste/alert',
    '@twilio-paste/card',
    '@twilio-paste/heading',
    '@twilio-paste/toast',
    '@twilio-paste/tabs',
    '@twilio-paste/modal',
  ],
  spaceNegative200: [],
  space190: [],
  space50: [
    '@twilio-paste/alert',
    '@twilio-paste/alert-dialog',
    '@twilio-paste/checkbox',
    '@twilio-paste/disclosure',
    '@twilio-paste/heading',
    '@twilio-paste/popover',
    '@twilio-paste/tabs',
    '@twilio-paste/table',
    '@twilio-paste/modal',
  ],
  space180: [],
  space40: [
    '@twilio-paste/button',
    '@twilio-paste/heading',
    '@twilio-paste/input',
    '@twilio-paste/inline-control-group',
    '@twilio-paste/menu',
    '@twilio-paste/select',
    '@twilio-paste/table',
    '@twilio-paste/toast',
    '@twilio-paste/tabs',
    '@twilio-paste/textarea',
    '@twilio-paste/pagination',
  ],
  space170: [],
  space30: [
    '@twilio-paste/alert',
    '@twilio-paste/button',
    '@twilio-paste/checkbox',
    '@twilio-paste/disclosure',
    '@twilio-paste/heading',
    '@twilio-paste/help-text',
    '@twilio-paste/input',
    '@twilio-paste/list',
    '@twilio-paste/menu',
    '@twilio-paste/select',
    '@twilio-paste/textarea',
    '@twilio-paste/tabs',
    '@twilio-paste/tooltip',
    '@twilio-paste/combobox',
    '@twilio-paste/input-box',
    '@twilio-paste/pagination',
  ],
  space160: [],
  space20: [
    '@twilio-paste/base-radio-checkbox',
    '@twilio-paste/button',
    '@twilio-paste/breadcrumb',
    '@twilio-paste/checkbox',
    '@twilio-paste/disclosure',
    '@twilio-paste/help-text',
    '@twilio-paste/inline-control-group',
    '@twilio-paste/label',
    '@twilio-paste/menu',
    '@twilio-paste/select',
    '@twilio-paste/tabs',
    '@twilio-paste/tooltip',
    '@twilio-paste/combobox',
    '@twilio-paste/pagination',
  ],
  space150: [],
  space10: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/disclosure', '@twilio-paste/card'],
  space140: [],
  space130: [],
  space120: [],
  spaceNegative90: [],
  space110: ['@twilio-paste/tabs'],
  space0: [
    '@twilio-paste/grid',
    '@twilio-paste/media-object',
    '@twilio-paste/stack',
    '@twilio-paste/alert-dialog',
    '@twilio-paste/base-radio-checkbox',
    '@twilio-paste/breadcrumb',
    '@twilio-paste/button',
    '@twilio-paste/checkbox',
    '@twilio-paste/disclosure',
    '@twilio-paste/heading',
    '@twilio-paste/help-text',
    '@twilio-paste/inline-control-group',
    '@twilio-paste/input',
    '@twilio-paste/label',
    '@twilio-paste/menu',
    '@twilio-paste/paragraph',
    '@twilio-paste/radio-group',
    '@twilio-paste/screen-reader-only',
    '@twilio-paste/select',
    '@twilio-paste/separator',
    '@twilio-paste/tabs',
    '@twilio-paste/combobox',
    '@twilio-paste/pagination',
    '@twilio-paste/modal',
  ],
  spaceNegative80: [],
  space100: ['@twilio-paste/select', '@twilio-paste/combobox'],
  space200: ['@twilio-paste/card'],
  spaceNegative10: ['@twilio-paste/screen-reader-only'],
  space90: ['@twilio-paste/menu', '@twilio-paste/toast', '@twilio-paste/combobox', '@twilio-paste/pagination'],
  spaceNegative120: [],
  space80: ['@twilio-paste/base-radio-checkbox'],
  colorTextLinkDestructiveDark: [],
  colorTextLinkDestructiveWeak: ['@twilio-paste/button'],
  colorTextLinkStronger: ['@twilio-paste/anchor', '@twilio-paste/button', '@twilio-paste/tabs'],
  colorTextLinkDestructive: ['@twilio-paste/button'],
  colorTextWarning: ['@twilio-paste/alert', '@twilio-paste/toast'],
  colorTextNew: [],
  colorTextInverseWeak: [
    '@twilio-paste/help-text',
    '@twilio-paste/input',
    '@twilio-paste/label',
    '@twilio-paste/select',
    '@twilio-paste/textarea',
    '@twilio-paste/combobox',
  ],
  colorTextLinkDestructiveStronger: ['@twilio-paste/button'],
  colorTextSuccess: ['@twilio-paste/toast'],
  colorTextWeak: [
    '@twilio-paste/disclosure',
    '@twilio-paste/breadcrumb',
    '@twilio-paste/input',
    '@twilio-paste/label',
    '@twilio-paste/help-text',
    '@twilio-paste/popover',
    '@twilio-paste/textarea',
    '@twilio-paste/tabs',
    '@twilio-paste/pagination',
    '@twilio-paste/modal',
  ],
  colorTextIcon: [
    '@twilio-paste/alert',
    '@twilio-paste/disclosure',
    '@twilio-paste/checkbox',
    '@twilio-paste/menu',
    '@twilio-paste/select',
    '@twilio-paste/toast',
    '@twilio-paste/combobox',
  ],
  colorTextLink: [
    '@twilio-paste/anchor',
    '@twilio-paste/button',
    '@twilio-paste/menu',
    '@twilio-paste/tabs',
    '@twilio-paste/pagination',
  ],
  colorTextNeutral: ['@twilio-paste/alert', '@twilio-paste/toast'],
  colorTextError: ['@twilio-paste/alert', '@twilio-paste/help-text', '@twilio-paste/toast'],
  colorTextIconInverse: [],
  colorTextErrorStrong: [],
  colorTextErrorWeak: ['@twilio-paste/help-text'],
  colorTextLinkStrong: [],
  colorTextBrandInverse: [],
  colorTextLinkWeak: ['@twilio-paste/button'],
  colorText: [
    '@twilio-paste/text',
    '@twilio-paste/avatar',
    '@twilio-paste/breadcrumb',
    '@twilio-paste/disclosure',
    '@twilio-paste/heading',
    '@twilio-paste/menu',
    '@twilio-paste/label',
    '@twilio-paste/list',
    '@twilio-paste/paragraph',
    '@twilio-paste/combobox',
    '@twilio-paste/pagination',
  ],
  colorTextWeakest: ['@twilio-paste/button', '@twilio-paste/checkbox'],
  colorTextBrandHighlight: [],
  colorTextInverseWeaker: [
    '@twilio-paste/button',
    '@twilio-paste/input',
    '@twilio-paste/select',
    '@twilio-paste/textarea',
  ],
  colorTextInverse: [
    '@twilio-paste/anchor',
    '@twilio-paste/button',
    '@twilio-paste/label',
    '@twilio-paste/tooltip',
    '@twilio-paste/input-box',
  ],
  colorTextWeaker: [
    '@twilio-paste/input',
    '@twilio-paste/menu',
    '@twilio-paste/select',
    '@twilio-paste/tabs',
    '@twilio-paste/textarea',
    '@twilio-paste/combobox',
  ],
  colorTextWarningStrong: [],
  colorTextLinkDestructiveStrong: [],
  zIndex0: [],
  zIndex90: ['@twilio-paste/toast', '@twilio-paste/tooltip'],
  zIndex80: ['@twilio-paste/popover', '@twilio-paste/modal'],
  zIndex20: ['@twilio-paste/menu', '@twilio-paste/combobox'],
  zIndex10: ['@twilio-paste/input-box'],
};

describe('getMinimalPackageList', () => {
  it('returns the most minimal package list for a set of token-package mappings', () => {
    expect(getMinimalPackageList(tokenPackageMap)).toEqual([
      '@twilio-paste/pagination',
      '@twilio-paste/avatar',
      '@twilio-paste/button',
      '@twilio-paste/alert',
      '@twilio-paste/card',
      '@twilio-paste/table',
      '@twilio-paste/base-radio-checkbox',
      '@twilio-paste/label',
      '@twilio-paste/radio-group',
      '@twilio-paste/tooltip',
      '@twilio-paste/modal',
      '@twilio-paste/input-box',
      '@twilio-paste/toast',
      '@twilio-paste/disclosure',
      '@twilio-paste/heading',
      '@twilio-paste/select',
      '@twilio-paste/tabs',
      '@twilio-paste/screen-reader-only',
      '@twilio-paste/help-text',
      '@twilio-paste/menu',
    ]);
  });
});
