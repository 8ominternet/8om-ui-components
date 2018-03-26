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
    border-color: #4da1ff;
  }
  & .Select.is-open > .Select-control {
    border-color: #4da1ff;
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
    background-color: #4192ec;
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
    const { labelStyle, placeholderColor, width, label, ...props } = this.props
    return (
      <SelectWrapper width={width}>
        {label && <Label style={labelStyle && labelStyle}>{label}</Label>}
        <Select clearable={false} {...props} />
      </SelectWrapper>
    )
  }
}

export { SelectBox }
