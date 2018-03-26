import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
// import 'react-select/dist/react-select.css'
const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => (props.width ? props.width : 'auto')};

  & .Select-control {
    height: auto;
    border: none;
    background-color: transparent !important;
  }
  & .Select-input {
    height: auto;
  }
  & .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    line-height: inherit;
  }
  & .Select-control {
    display: flex;
    align-items: center;
  }
  & .Select-placeholder {
    font-size: 16px;
    color: ${props => (props.textColor ? props.textColor : '#4192ec')};
    ${props => props.textStyle && { ...props.textStyle }};
  }
  & .is-disabled .Select-placeholder {
    opacity: 0.35;
  }

  & .Select-placeholder + div {
    display: none !important;
  }

  & .Select.is-disabled > .Select-control {
    background-color: #f4f8f9;
  }
  & .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    position: relative !important;
    padding-left: 5px;
    padding-right: 5px;
  }
  & .Select-arrow {
    border: solid ${props => (props.iconColor ? props.iconColor : '#808fa3')};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    top: -3px;
  }
  & .Select.is-open > .Select-control .Select-arrow {
    border: solid ${props => (props.iconColor ? props.iconColor : '#808fa3')};
    border-width: 0 2px 2px 0;
    top: 1px;
    transform: rotate(-135deg);
  }
  & .Select-arrow-zone {
    background: none;
    padding: 0px;
    border: none;
  }
  & .Select.is-open > .Select-control .Select-arrow-zone,
  .Select.is-focused:not(.is-open) > .Select-control .Select-arrow-zone {
    background-color: transparent;
    & .Select-arrow {
      border-color: ${props => (props.iconColor ? props.iconColor : '#808fa3')};
    }
  }
  & .Select-menu-outer {
    min-width: 120px;
    border: 1px solid #e9eff4;
    border-radius: 2px;
    margin-top: 7px;
    box-shadow: 0px 1px 2px 0px rgba(6, 5, 2, 0.06);
  }
  & .Select-option.is-focused {
    background-color: #e9eff4;
  }
  & .Select-option {
    color: #4a4a4a;
    border-radius: 0px;
    border-bottom: 1px solid #e9eff4;
    &:last-child {
      border: none;
    }
  }
  & .Select-control:hover {
    box-shadow: none;
  }
`

const Label = styled.p`
  color: #323c47;
  font-size: 11px;
  margin-bottom: 8px;
  letter-spacing: 0.8px;
  font-family: sans-serif;
`

class Dropdown extends React.Component {
  render() {
    const {
      labelStyle,
      placeholderColor,
      text = 'Example',
      textStyle,
      textColor,
      width,
      iconColor,
      label,
      ...props
    } = this.props
    return (
      <DropdownWrapper width={width} textColor={textColor} textStyle={textStyle} iconColor={iconColor}>
        {label && <Label style={labelStyle && labelStyle}>{label}</Label>}
        <Select placeholder={text} clearable={false} searchable={false} {...props} />
      </DropdownWrapper>
    )
  }
}

export { Dropdown }
