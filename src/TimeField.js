import React from 'react'
import styled from 'styled-components'

const TimeFieldWrapper = styled.section`
  display: inline-block;
  position: relative;
  border-radius: 4px;
  width: ${props => props.width && props.width};

  & input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & input[type='number'] {
    -moz-appearance: textfield;
  }
`
const InputNumber = styled.input`
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  border: none;
  background: transparent;
  z-index: 8;
  width: 100%;
  opacity: 0;
`
const InputContainer = styled.div`
  border: 1px solid #e9eff4;
  height: 38px;
  width: 100%;
  border-radius: 4px;
  padding: 9px 31px 9px 7px;
  font-size: 13px;
  letter-spacing: 0.2px;
  box-sizing: border-box;
  color: #323c47;
  text-align: center;
  overflow: hidden;
  background-color: ${props => (props.disabled ? '#f4f8f9' : 'inherit')};
`
const Icons = styled.div`
  position: absolute;
  right: 1px;
  max-width: 24px;
  max-height: 36px;
  min-width: 24px;
  min-height: 36px;
  bottom: 1px;
  border-left: 1px solid #e9eff4;
  background-color: #f4f7f9;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  & > div {
    ${props =>
      props.disabled &&
      `
    pointer-events: none;
    `};
    &:active {
      background-color: #e1e9ef;
    }
    width: 24px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:first-child {
      font-size: 11px;
      border-bottom: 1px solid #e9eff4;
    }
  }
`

const Label = styled.p`
  color: ${props => (props.disabled ? '#9b9b9b' : '#323c47')};
  font-size: 11px;
  margin-bottom: 8px;
  letter-spacing: 0.8px;
  font-family: sans-serif;
`

class TimeField extends React.Component {
  state = { currentValue: 0 }
  handleChange = e => {
    this.setState({ currentValue: Number(e.target.value) })
  }
  add = e => {
    this.setState({ currentValue: this.state.currentValue + 1 })
  }
  minus = e => {
    this.setState({ currentValue: this.state.currentValue - 1 })
  }
  render() {
    const { width = '90px', format, labelStyle, disabled, onChange, label, ...props } = this.props
    const { currentValue } = this.state
    return (
      <TimeFieldWrapper width={width}>
        {label && (
          <Label disabled={disabled} style={labelStyle && labelStyle}>
            {label}
          </Label>
        )}
        <InputContainer disabled={disabled}>
          {currentValue && currentValue}
          {format && format}
          <InputNumber
            defaultValue="5hr"
            disabled={disabled}
            {...props}
            type="number"
            onChange={e => {
              this.handleChange(e)
              onChange && onChange(e.target.value)
            }}
          />
        </InputContainer>
        <Icons disabled={disabled}>
          <div
            onClick={() => {
              this.add()
              onChange && onChange(currentValue + 1)
            }}>
            +
          </div>
          <div
            onClick={() => {
              this.minus()
              onChange && onChange(currentValue - 1)
            }}>
            -
          </div>
        </Icons>
      </TimeFieldWrapper>
    )
  }
}

export { TimeField }
