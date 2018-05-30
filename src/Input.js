import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'
const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
`
const Icons = styled.div`
  position: absolute;
  right: 10px;
  bottom: 12px;
  cursor: pointer;
  opacity: 0.4;
  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  outline: none;
  border: 1px solid #e9eff4;
  height: 38px;
  width: 400px;
  border-radius: 4px;
  padding: 9px 12px;
  font-size: 13px;
  letter-spacing: 0.2px;
  box-sizing: border-box;
  color: #323c47;
  &:focus {
    border-color: #4da1ff;
  }

  &:disabled {
    background-color: #f4f8f9;
  }
  &:valid {
    & + div {
      opacity: 1;
    }
  }
  &:required {
    box-shadow: none;
  }
  &:not(output):-moz-ui-invalid {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }

  &:not(output):-moz-ui-invalid:-moz-focusring {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
  ${props =>
    props.readOnly &&
    `
  background-color: #f4f8f9;
  
  `};
  ${props =>
    props.passwordToggle &&
    `
  padding-right:35px;
  
  `};

  /* Placeholder color */
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${props => (props.placeholderColor ? props.placeholderColor : '#9b9b9b')};
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${props => (props.placeholderColor ? props.placeholderColor : '#9b9b9b')};
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: ${props => (props.placeholderColor ? props.placeholderColor : '#9b9b9b')};
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${props => (props.placeholderColor ? props.placeholderColor : '#9b9b9b')};
  }
`
const TooltipWrapper = styled.div`
  display: inline;
  cursor: pointer;
  position: absolute;
  right: 15px;
  ${props =>
    props.label
      ? `
    top: 42px;
  `
      : 'top: 11px;'};
`
const TooltipText = styled.div`
  visibility: ${props => (props.showTooltip ? 'visible' : 'hidden')};
  max-width: 320px;
  padding: 10px 8px;
  position: absolute;
  z-index: 99;
  bottom: 34px;
  right: 13px;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(77, 161, 255, 0.45);
  background-color: #f3f7fa;
  border: solid 1px rgba(77, 161, 255, 0.2);
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.3px;
  color: #4a4a4a;
  transition: ease-in linear 0.2s;
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    right: 4px;
    height: 5px;
    width: 5px;
    border-bottom: 1px solid rgba(77, 161, 255, 0.2);
    border-left: 1px solid rgba(77, 161, 255, 0.2);
    transform: rotate(-45deg);
    background: #f3f7fa;
    z-index: 9999;
    opacity: 1;
    transition: ease-in linear 0.2s;
  }
`
const Label = styled.p`
  color: ${props => (props.disabled ? '#9b9b9b' : '#323c47')};
  font-size: 11px;
  margin-bottom: 8px;
  letter-spacing: 0.8px;
  font-family: sans-serif;
`

class Input extends React.Component {
  state = { showPassword: false }
  render() {
    const {
      labelStyle,
      placeholderColor,
      disabled,
      label,
      passwordToggle = true,
      type,
      toolTipText,
      showTooltip,
      infoMessage,
      ...props
    } = this.props
    const { showPassword } = this.state
    return (
      <InputWrapper>
        {label && (
          <Label disabled={disabled} style={labelStyle && labelStyle}>
            {label}
          </Label>
        )}
        <StyledInput
          disabled={disabled}
          passwordToggle={passwordToggle}
          showTooltip={showTooltip}
          toolTipText={toolTipText}
          placeholderColor={placeholderColor && placeholderColor}
          type={type ? (showPassword ? 'text' : type) : 'text'}
          required
          {...props}
        />
        {infoMessage && (
          <TooltipWrapper label={label}>
            <Icon icon="information" />
          </TooltipWrapper>
        )}
        <TooltipText showTooltip={showTooltip}>{toolTipText}</TooltipText>
        {type === 'password' && passwordToggle ? (
          <Icons onClick={() => this.setState({ showPassword: !showPassword })}>
            <Icon icon={showPassword ? 'passwordHide' : 'passwordShow'} />
          </Icons>
        ) : (
          ''
        )}
      </InputWrapper>
    )
  }
}

export { Input }
