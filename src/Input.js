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
    const { labelStyle, placeholderColor, disabled, label, passwordToggle = true, type, ...props } = this.props
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
          placeholderColor={placeholderColor && placeholderColor}
          type={type ? (showPassword ? 'text' : type) : 'text'}
          required
          {...props}
        />
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
