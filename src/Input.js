import React from 'react'
import styled, { keyframes } from 'styled-components'

const InputWrapper = styled.div`
  display: inline-block;
`
const StyledInput = styled.input`
  outline: none;
  border: 1px solid #e9eff4;
  height: 45px;
  width: 400px;
  border-radius: 4px;
  padding: 9px 12px;
  font-size: 13px;
  letter-spacing: 0.2px;
  box-sizing: border-box;
  color: #9b9b9b;
  &:focus {
    border-color: #4da1ff;
  }

  &:disabled {
    background-color: #f4f8f9;
  }
  ${props =>
    props.readOnly &&
    `
  background-color: #f4f8f9;
  
  `} /* Placeholder color */
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
  color: #323c47;
  font-size: 11px;
  margin-bottom: 8px;
  letter-spacing: 0.8px;
  font-family: sans-serif;
`
class Input extends React.Component {
  render() {
    const { labelStyle, placeholderColor, label, ...props } = this.props
    return (
      <InputWrapper>
        {label && <Label style={labelStyle && labelStyle}>{label}</Label>}
        <StyledInput {...props} placeholderColor={placeholderColor && placeholderColor} />
      </InputWrapper>
    )
  }
}

export { Input }
