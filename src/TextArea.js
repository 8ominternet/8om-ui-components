import React from 'react'
import styled from 'styled-components'
const TextAreaWrapper = styled.div`
  display: inline-block;
  position: relative;
`

const StyledTextArea = styled.textarea`
  outline: none;
  border: 1px solid #e9eff4;
  width: 100%;
  border-radius: 4px;
  padding: 9px 12px;
  font-size: 13px;
  letter-spacing: 0.2px;
  box-sizing: border-box;
  color: #323c47;
  resize: vertical;
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

class TextArea extends React.Component {
  render() {
    const { labelStyle, disabled, placeholderColor, label, ...props } = this.props
    return (
      <TextAreaWrapper>
        {label && (
          <Label disabled={disabled} style={labelStyle && labelStyle}>
            {label}
          </Label>
        )}
        <StyledTextArea
          placeholderColor={placeholderColor && placeholderColor}
          disabled={disabled}
          rows="3"
          required
          {...props}
        />
      </TextAreaWrapper>
    )
  }
}

export { TextArea }
