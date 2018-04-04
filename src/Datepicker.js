import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Icon } from './Icon'
const DatepickerWrapper = styled.section`
  display: inline-block;
  position: relative;
  border-radius: 4px;
  & input[type='text'] {
    outline: none;
    border: 1px solid #e9eff4;
    height: 38px;
    width: ${props => props.width && props.width};
    border-radius: 4px;
    padding: 9px 40px 9px 12px;
    font-size: 13px;
    letter-spacing: 0.2px;
    box-sizing: border-box;
    color: #323c47;
    background-color: transparent;
    &:disabled {
      background-color: #f4f8f9;
    }
    &:required {
      box-shadow: none;
    }
  }
`
const Icons = styled.div`
  position: absolute;
  right: 0px;
  width: 38px;
  height: 36px;
  min-width: 38px;
  min-height: 36px;
  bottom: 0px;
  border: 1px solid #e9eff4;
  background-color: #f4f7f9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 4px 4px 0px;
`

const Label = styled.p`
  color: ${props => (props.disabled ? '#9b9b9b' : '#323c47')};
  font-size: 11px;
  margin-bottom: 8px;
  letter-spacing: 0.8px;

  font-family: sans-serif;
`

class Datepicker extends React.Component {
  render() {
    const { width = '200px', labelStyle, disabled, label, ...props } = this.props
    return (
      <DatepickerWrapper width={width}>
        {label && (
          <Label disabled={disabled} style={labelStyle && labelStyle}>
            {label}
          </Label>
        )}
        <DatePicker disabled={disabled} {...props} />
        <Icons disabled={disabled}>
          <Icon icon="calendar" />
        </Icons>
      </DatepickerWrapper>
    )
  }
}

export { Datepicker }
