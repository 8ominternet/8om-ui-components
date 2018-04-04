import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'
const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;
`
const Icons = styled.div`
  position: absolute;
  left: 10px;
  top: 0px;
  height: 100%;
  cursor: pointer;
  opacity: 0.4;
  display: flex;
  z-index: 99;
  align-items: center;
`

const StyledInput = styled.input`
  outline: none;
  border: 1px solid #e9eff4;
  height: 38px;
  width: ${props => props.width && props.width};
  border-radius: 2px;
  padding: 9px 12px 9px 40px;
  font-size: 16px;
  letter-spacing: 0.2px;
  box-sizing: border-box;
  color: #4a4a4a;
  transition: 0.4s;
  z-index: 99;
  position: relative;
  &:hover {
    box-shadow: 0px 1px 2px 0px rgba(208, 215, 221, 1) !important;
  }
  &:focus {
    border-color: #e9eff4;
    box-shadow: none !important;
    & + div + div {
      top: 37px;
      opacity: 1;
      z-index: 9;
    }
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
const Suggestion = styled.div`
  background-color: #fff;
  border: 1px solid #e9eff4;
  width: 100%;
  transition: 0.4s;
  position: absolute;
  border-radius: 0 0 2px 2px;
  top: 0px;
  opacity: 0;
  box-sizing: border-box;
  z-index: -1;
  overflow: hidden;
  box-shadow: 0px 1px 2px 0px rgba(208, 215, 221, 1);
  &:last-child {
    border-bottom: none;
  }
  & > * > * {
    box-sizing: border-box;
    border-bottom: 1px solid #e9eff4;
    padding: 10px;
    margin: 0px;
    font-size: 14px;
    color: #4a4a4a;
  }
`

class Search extends React.Component {
  state = { showPassword: false }
  render() {
    const {
      labelStyle,
      placeholderColor,
      width = '300px',
      iconWidth = 20,
      iconHeight = 20,
      iconColor = '#4A4A4A',
      suggestionComponent,
      ...props
    } = this.props
    return (
      <InputWrapper>
        <StyledInput
          width={width}
          placeholder="Search"
          placeholderColor={placeholderColor && placeholderColor}
          type={'text'}
          required
          {...props}
        />
        <Icons>
          <Icon icon={'search'} width={iconWidth} height={iconHeight} iconColor={iconColor} />
        </Icons>
        {suggestionComponent && <Suggestion>{suggestionComponent}</Suggestion>}
      </InputWrapper>
    )
  }
}

export { Search }
