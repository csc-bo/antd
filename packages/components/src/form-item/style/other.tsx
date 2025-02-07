import { CSSProperties } from 'react'
import { GenerateStyle } from '../../__builtins__'

export const genOtherStyle: GenerateStyle = (token) => {
  const {
    componentCls,
    colorError,
    colorErrorBg,
    colorWarningBg,
    colorWarning,
    colorBorder,
    colorSuccess,
    lineWidth,
    colorPrimaryBorderHover,
    colorPrimary,
    antCls,
    fontSize,
    marginSM,
    controlHeight,
    controlHeightSM,
    lineHeight,
    controlOutlineWidth,
    controlOutline,
    colorPrimaryHover,
    colorTextSecondary,
  } = token

  const hover = (color = colorPrimaryBorderHover): CSSProperties => ({
    borderColor: color,
    borderInlineEndWidth: lineWidth,
  })

  const active = (color = colorPrimary): CSSProperties => ({
    borderColor: color,
    borderInlineEndWidth: lineWidth,
    outline: 0,
    boxShadow: `${controlOutlineWidth} 0 ${controlOutline} ${colorPrimaryHover}`,
  })

  return {
    [componentCls]: {
      '&-layout-vertical': {
        display: 'block',

        [`${antCls}-label`]: {
          minHeight: controlHeight - 10,
          lineHeight,
        },
      },

      '&-success': {
        [`${antCls}-select-selector,
          ${antCls}-cascader-picker,
          ${antCls}-picker,
          ${antCls}-input,
          ${antCls}-input-number,
          ${antCls}-input-affix-wrapper,
          ${antCls}-input-affix-wrapper,
          ${antCls}-input`]: {
          borderColor: `${colorSuccess} !important`,
        },
        [`${antCls}-select-selector,
        ${antCls}-cascader-picker,
        ${antCls}-picker,
        ${antCls}-input,
        ${antCls}-input-number,
        ${antCls}-input-affix-wrapper,
        ${antCls}-input-affix-wrapper:hover,
        ${antCls}-input:hover`]: {
          borderColor: `${colorSuccess} !important`,
        },
        [`${antCls}-input-affix-wrapper-focused,
        ${antCls}-input-affix-wrapper:focus,
        ${antCls}-input-focused,
        ${antCls}-input:focus`]: {
          borderColor: `${colorSuccess} !important`,
          borderInlineEndWidth: '1px !important',
          outline: 0,
        },
      },

      '&-warning': {
        [`${antCls}-select-selector,
          ${antCls}-cascader-picker,
          ${antCls}-picker,
          ${antCls}-input,
          ${antCls}-input-number,
          ${antCls}-input-affix-wrapper,
          ${antCls}-input-affix-wrapper,
          ${antCls}-input`]: {
          borderColor: colorSuccess,
        },

        [`${antCls}-select-selector,
          ${antCls}-cascader-picker,
          ${antCls}-picker,
          ${antCls}-input,
          ${antCls}-input-number,
          ${antCls}-input-affix-wrapper,
          ${antCls}-input-affix-wrapper:hover,
          ${antCls}-input:hover`]: {
          borderColor: colorSuccess,
        },

        [`${antCls}-select:not(${antCls}-select-disabled):not(${antCls}-select-customize-input)`]:
          {
            [`${antCls}-select-selector`]: {
              backgroundColor: colorWarningBg,
              borderColor: colorSuccess,
            },

            [`&${antCls}-select-open ${antCls}-select-selector,
              &${antCls}-select-focused ${antCls}-select-selector`]: {
              ...active(colorWarning),
            },
          },

        [`${antCls}-input-number,
          ${antCls}-picker`]: {
          backgroundColor: colorWarningBg,
          borderColor: colorWarning,

          [`&-focused,
            &:focus`]: {
            ...active(colorWarning),
          },

          '&:not([disabled]):hover': {
            backgroundColor: colorWarningBg,
            borderColor: colorWarning,
          },
        },

        [`${antCls}-cascader-picker:focus ${antCls}-cascader-input`]: {
          backgroundColor: colorWarningBg,
          ...active(colorWarning),
        },

        [`${antCls}-input-affix-wrapper-focused,
          ${antCls}-input-affix-wrapper:focus,
          ${antCls}-input-focused,
          ${antCls}-input:focus`]: {
          ...active(colorWarning),
        },
      },

      '&-error': {
        [`${antCls}-select-selector,
            ${antCls}-cascader-picker,
            ${antCls}-picker,
            ${antCls}-input,
            ${antCls}-input-number,
            ${antCls}-input-affix-wrapper,
            ${antCls}-input`]: {
          borderColor: `${colorError} !important`,
        },

        [`${antCls}-select-selector,
            ${antCls}-cascader-picker,
            ${antCls}-picker,
            ${antCls}-input,
            ${antCls}-input-number,
            ${antCls}-input-affix-wrapper,
            ${antCls}-input-affix-wrapper:hover,
            ${antCls}-input:hover`]: {
          borderColor: `${colorError}  !important`,
        },

        [`${antCls}-select:not(${antCls}-select-disabled):not(${antCls}-select-customize-input)`]:
          {
            [`${antCls}-select-selector`]: {
              backgroundColor: colorErrorBg,
              borderColor: `${colorError}  !important`,
            },

            [`&${antCls}-select-open ${antCls}-select-selector,
                &${antCls}-select-focused ${antCls}-select-selector`]: {
              ...active(colorError),
            },
          },

        [`${antCls}-input-number,
            ${antCls}-picker`]: {
          backgroundColor: colorErrorBg,
          borderColor: colorError,

          [`&-focused,
            &:focus`]: {
            ...active(colorError),
          },

          [`&:not([disabled]):hover`]: {
            backgroundColor: colorErrorBg,
            borderColor: colorError,
          },
        },

        [`${antCls}-cascader-picker:focus ${antCls}-cascader-input`]: {
          backgroundColor: colorErrorBg,
          ...active(colorError),
        },

        [`${antCls}-input-affix-wrapper-focused,
            ${antCls}-input-affix-wrapper:focus,
            ${antCls}-input-focused,
            ${antCls}-input:focus`]: {
          ...active(colorError),
        },
      },

      '&-feedback-layout': {
        '&-terse': {
          marginBottom: 8,

          [`&${componentCls}-feedback-has-text:not(${componentCls}-inset)`]: {
            marginBottom: 0,
          },
        },

        '&-loose': {
          marginBottom: 22,
          [`&${componentCls}-feedback-has-text:not(${componentCls}-inset)`]: {
            marginBottom: 0,
          },
        },

        '&-none': {
          marginBottom: 0,

          [`&${componentCls}-feedback-has-text:not(${componentCls}-inset)`]: {
            marginBottom: 0,
          },
        },
      },

      '&-control-wrap': {
        [`${componentCls}-control`]: {
          whiteSpace: 'pre-line',
          wordBreak: 'break-all',
        },
      },

      '&-control-align': {
        '&-left': {
          [`${componentCls}-control-content`]: {
            justifyContent: 'flex-start',
          },
        },

        '&-right': {
          [`${componentCls}-control-content`]: {
            justifyContent: 'flex-end',
          },
        },
      },

      "input[type='radio'], input[type='checkbox']": {
        width: fontSize,
        height: fontSize,
      },

      '&-feedback-layout-popover': {
        marginBottom: 8,
      },

      '&-fullness': {
        [`> ${componentCls}-control`]: {
          [`> ${componentCls}-control-content`]: {
            [`> ${componentCls}-control-content-component`]: {
              '> *:first-child': {
                width: '100%',
              },
            },
          },
        },
      },

      '&-inset': {
        borderRadius: 2,
        border: `1px solid ${colorBorder}`,
        paddingInlineStart: 12,
        transition: '0.3s all',

        [`${antCls}-input-number,
          ${antCls}-picker,
          ${antCls}-cascader-picker:focus ${antCls}-cascader-input,
          ${antCls}-select:not(${antCls}-select-customize-input)
          ${antCls}-select-selector,
          ${antCls}-input-affix-wrapper,
          ${antCls}-input`]: {
          border: 'none !important',
          boxShadow: 'none !important',
        },

        [`${antCls}-input-number-handler-wrap`]: {
          border: 'none !important',

          [`${antCls}-input-number-handler`]: {
            border: 'none !important',
          },
        },

        '&:hover': {
          ...hover(),
        },
      },

      '&-active': {
        [`${componentCls}-control-content-component-has-feedback-icon`]: {
          ...active(),
        },

        [`${antCls}-input-number,
          ${antCls}-picker,
          ${antCls}-cascader-picker:focus ${antCls}-cascader-input,
          ${antCls}-select:not(${antCls}-select-customize-input)
          ${antCls}-select-selector,
          ${antCls}-input`]: {
          ...active(),
        },
      },

      '&-inset-active': {
        ...active(),
      },

      '&-bordered-none': {
        [`${antCls}-input-number,
          ${antCls}-input-affix-wrapper,
          ${antCls}-picker,
          ${antCls}-cascader-picker:focus ${antCls}-cascader-input,
          ${antCls}-select:not(${antCls}-select-customize-input)
          ${antCls}-select-selector,
          ${antCls}-input`]: {
          border: 'none !important',
          boxShadow: 'none !important',
        },

        [`${antCls}-input-number-handler-wrap`]: {
          border: 'none !important',

          [`${antCls}-input-number-handler`]: {
            border: 'none !important',
          },
        },
      },

      '&:hover': {
        [`${componentCls}-control-content-component-has-feedback-icon`]: {
          ...hover(),
        },
      },

      [`textarea${antCls}-input`]: {
        height: 'auto',
      },

      [`${componentCls}-label-tooltip-icon`]: {
        marginInlineStart: 4,

        color: token.colorTextSecondary,
        display: 'flex',
        alignItems: 'center',
        maxHeight: controlHeight,

        span: {
          display: 'inline-block',
        },
      },

      [`${componentCls}-asterisk`]: {
        color: colorError,
        marginInlineEnd: '4px',
        display: 'inline-block',
        fontFamily: 'SimSun, sans-serif',
      },

      [`${componentCls}-colon`]: {
        marginInlineStart: 2,
        marginInlineEnd: 8,
      },

      [`${componentCls}-control`]: {
        flex: 1,
        maxWidth: '100%',

        [`${componentCls}-control-content`]: {
          display: 'flex',

          [`${componentCls}-control-content-component`]: {
            width: '100%',
            minHeight: controlHeight - 2,
            lineHeight: `${controlHeight + 2}px`,

            [`&-has-feedback-icon`]: {
              flex: 1,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            },
          },

          [`${componentCls}-addon-before `]: {
            marginInlineEnd: 8,
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: controlHeight,
            flexShrink: 0,
          },

          [`${componentCls}-addon-after`]: {
            marginInlineStart: 8,
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: controlHeight,
            flexShrink: 0,
          },
        },

        [`${componentCls}-help,
        ${componentCls}-extra `]: {
          minHeight: controlHeightSM - 2,
          lineHeight: `${controlHeightSM - 2}px`,
          color: colorTextSecondary,
        },
      },

      [`${componentCls}-help,
          ${componentCls}-extra`]: {
        clear: 'both',
        minHeight: controlHeightSM - 2,
        color: 'rgba(0, 0, 0, 0.45)',
        transition: 'color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
        paddingTop: 0,
      },

      [`${componentCls}-control-content-component-has-feedback-icon`]: {
        borderRadius: 2,
        border: `1px solid ${colorBorder}`,
        paddingInlineEnd: 8,
        transition: 'all 0.3s',
        touchAction: 'manipulation',
        outline: 'none',

        [`${antCls}-input-number,
            ${antCls}-picker,
            ${antCls}-cascader-picker:focus ${antCls}-cascader-input,
            ${antCls}-select:not(${antCls}-select-customize-input)
            ${antCls}-select-selector,
            ${antCls}-input-affix-wrapper,
            ${antCls}-input`]: {
          border: 'none !important',
          boxShadow: 'none !important',
        },
      },

      [`${componentCls}-error-help`]: {
        color: `${colorError}  !important`,
      },

      [`${componentCls}-warning-help`]: {
        color: colorSuccess,
      },

      [`${componentCls}-success-help`]: {
        color: `${colorSuccess} !important`,
      },

      [`${antCls}-upload`]: {
        background: 'transparent',
      },

      [`${antCls}-upload${antCls}-upload-drag`]: {
        background: token.colorBgBase,
      },

      [`${antCls}-radio-inline, ${antCls}-checkbox-inline`]: {
        display: 'inline-block',
        marginInlineStart: marginSM,
        fontWeight: 'normal',
        verticalAlign: 'middle',
        cursor: 'pointer',

        '&:first-child': {
          marginInlineStart: 0,
        },
      },

      [`${antCls}-radio-vertical,
          ${antCls}-checkbox-vertical`]: {
        display: 'block',
      },

      [`${antCls}-checkbox-vertical + ${antCls}-checkbox-vertical,
          ${antCls}-radio-vertical + ${antCls}-radio-vertical`]: {
        marginInlineStart: 0,
      },

      [`${antCls}-input-number`]: {
        width: '100%',
        verticalAlign: 'top',

        [`+ ${antCls}-form-text`]: {
          marginInlineStart: marginSM,
        },

        '&-handler-wrap': {
          zIndex: 2,
        },
      },
      [`${antCls}-select,
          ${antCls}-cascader-picker,
          ${antCls}-picker`]: {
        width: '100%',
      },

      [`${antCls}-input-group ${antCls}-select,
          ${antCls}-input-group ${antCls}-cascader-picker`]: {
        width: 'auto',
      },
    },
  }
}
