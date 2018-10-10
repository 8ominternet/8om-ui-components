import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => (props.width ? props.width : '400px')};

  & .Select-control {
    height: 38px;
    border: 1px solid #e9eff4;
    font-size: 13px;
  }
  & .Select-input {
    height: 38px;
  }
  & .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    line-height: 38px;
  }
  & .Select,
  .Select div,
  .Select input,
  .Select span {
    font-size: 13px;
  }
  & .Select.is-focused:not(.is-open) > .Select-control {
    box-shadow: none;
    border-color: ${props => (props.focusColor ? props.focusColor : '#4da1ff')};
  }
  & .Select.is-open > .Select-control {
    border-color: ${props => (props.focusColor ? props.focusColor : '#4da1ff')};
  }
  & .Select.is-disabled > .Select-control {
    background-color: #f4f8f9;
  }
  & .Select-arrow {
    border: solid #808fa3;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    top: -1px;
  }
  & .Select.is-open > .Select-control .Select-arrow {
    border: solid #808fa3;
    border-width: 0 2px 2px 0;
    top: 1px;
    transform: rotate(-135deg);
  }
  & .Select-arrow-zone {
    background: #f4f7f9;
    padding: 0px 18px !important;
    border-left: 1px solid #e9eff4;
  }
  & .Select.is-open > .Select-control .Select-arrow-zone,
  .Select.is-focused:not(.is-open) > .Select-control .Select-arrow-zone {
    background-color: ${props => (props.focusColor ? props.focusColor : '#4192ec')};
    & .Select-arrow {
      border-color: #fff;
    }
  }
  & .Select-option.is-focused {
    background-color: #f4f8f9;
  }
  & .Select-control:hover {
    box-shadow: none;
  }

  & .Select-clear {
    width: 15px;
    height: 15px;
    background-color: #ff7575;
    color: #fff;
    border-radius: 50%;
    margin-right: 7px;
    font-size: 14px !important;
  }

  ${props =>
    props.customOptions &&
    `
    & .Select.is-open > .Select-control{
      border-radius:4px;
    }
    & .Select-menu-outer{
      border-radius: 4px;
      box-shadow: 0 2px 1px 0 rgba(208, 215, 221, 0.42);
      background-color: #ffffff;
      border: solid 1px #e9eff4;
      top: calc(100% + 10px);
      &:before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-left: 1px solid #e9eff4;
        border-bottom: 1px solid #e9eff4;
        background: #fff;
        left: 60%;
        top: -6px;
        transform: rotate(134deg);
      }
      & .Select-menu{
        display: flex;
        flex-wrap: wrap;
        position:relative;

      & .Select-option{
        margin:3px
        width: 41px;
        height: 38px;
        border-radius: 4px;
        border: solid 1px #e9eff4;
        font-size: 12px;
        color: #9b9b9b;
        display:flex;
        justify-content:center;
        align-items:center;
        }
      }
    }

    & .Select-multi-value-wrapper .Select-value{
      display: inline-flex;
      flex-direction: row-reverse;
      border-radius: 4px;
      background-color: rgba(155, 155, 155, 0.2);
      border:none;
      font-size: 12px;
      color: #000000;
      padding: 0 4px;
      height:28px;
      & > span{
        display:flex;
        align-items:center;
        padding: 0 5px;
        &:hover{
          background-color:transparent;
        }
      }
    }
    & .Select-multi-value-wrapper .Select-value-icon{
      border:none;
    }
    & .Select-option.is-selected{
      background-color: ${props => (props.focusColor ? props.focusColor : '#4da1ff')} !important;
      border: solid 1px ${props => (props.focusColor ? props.focusColor : '#4da1ff')} !important;
      color:#fff !important;
    }
  `};
`

const Label = styled.p`
  color: #323c47;
  font-size: 11px;
  margin-bottom: 8px;
  letter-spacing: 0.8px;
  font-family: sans-serif;
`

class SelectBox extends React.Component {
  render() {
    const { labelStyle, customOptions, placeholderColor, width, label, focusColor, ...props } = this.props
    return (
      <SelectWrapper width={width} customOptions={customOptions} focusColor={focusColor}>
        {label && <Label style={labelStyle && labelStyle}>{label}</Label>}
        <Select clearable={customOptions ? true : false} {...props} />
      </SelectWrapper>
    )
  }
}

export { SelectBox }
