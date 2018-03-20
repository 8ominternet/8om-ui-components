import React, { Component } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  position: relative;
  display: inline-block;
  padding: 0 8px;
  height: 18px;
`

const CheckedBox = styled.input`
  display: none;
  &:checked + div {
    background-color: ${props => props.activeBackgroundColor && props.activeBackgroundColor};
    text-align: left;
    padding-right: 8px;
    line-height: 18px;
    padding-left: 8px;
    color: ${props => props.activeTextColor && props.activeTextColor};
    padding-right: 22px;
  }
  &:checked + div:before {
    left: calc(100% - 16px);
  }
`

const Slider = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 12px;
  height: 18px;
  min-width: 46px;
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  background-color: #e1e6e2;
  transition: 0.4s;
  border-radius: 34px;
  box-sizing: border-box;
  ${props =>
    props.checked &&
    `
    padding-right: 8px;
    line-height: 18px;
    padding-left: 8px;
    color:${props => props.activeTextColor && props.activeTextColor};
    padding-right: 22px;
  `};
  ${props => (props.checked && props.activeTextColor ? `color:${props.activeTextColor}` : `color:#323C47`)};
  ${props =>
    !props.checked &&
    `
    padding-right: 8px;
    padding-left: 22px;
    line-height: 18px;
    color:#323C47;    
    text-align:right;
  `};

  &:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    top: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  &:hover:before {
    background-color: ${props =>
      props.checked && props.activeBackgroundColor ? `#e1e6e2` : `${props.activeBackgroundColor}`};
  }
`

class SwitchToggle extends Component {
  state = {
    checked: this.props.checked ? true : false
  }
  render() {
    const {
      disabledText = 'Off',
      enabledText = 'On',
      activeTextColor = '#ffffff',
      activeBackgroundColor = '#2196f3',
      onChange,
      width
    } = this.props

    return (
      <Label>
        <CheckedBox
          activeBackgroundColor={activeBackgroundColor}
          onChange={() => onChange && onChange(this.state.checked)}
          type="checkbox"
          defaultChecked={this.state.checked}
        />
        <Slider
          width={width}
          checked={this.state.checked}
          onClick={() => this.setState({ checked: !this.state.checked })}
          activeTextColor={activeTextColor}
          activeBackgroundColor={activeBackgroundColor}>
          {this.state.checked ? enabledText : disabledText}
        </Slider>
      </Label>
    )
  }
}
export { SwitchToggle }
