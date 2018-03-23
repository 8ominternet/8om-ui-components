import React, { Component } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  position: relative;
  display: inline-flex;
  padding: 0 8px;
  inline-flex;
  align-items: center;
  & span {
    font-size: 12px;
    padding-left: 10px;
  }
`

const Input = styled.input`
  display: none;
  &:checked + div {
    border-color: ${props => props.activeColor && props.activeColor};
  }
  &:checked + div:before {
    background: ${props => props.activeColor && props.activeColor};
  }
`

const Circle = styled.div`
  width: ${props => props.iconSize && props.iconSize};
  height: ${props => props.iconSize && props.iconSize};
  border-radius: 50%;
  position: relative;
  border: calc(${props => props.iconSize && props.iconSize} / 6) solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  &:before {
    width: calc(${props => props.iconSize && props.iconSize} / 2);
    height: calc(${props => props.iconSize && props.iconSize} / 2);
    transition: 0.2s;
    content: '';
    position: absolute;
    margin: auto;
    background: transparent;
    border-radius: 50%;
  }
`

class Radio extends Component {
  render() {
    const { label, iconSize = '12px', activeColor = '#4da1ff', labelStyle, ...props } = this.props

    return (
      <Label>
        <Input {...props} type="radio" activeColor={activeColor} />
        <Circle iconSize={iconSize} />
        {label && <span style={labelStyle}>{label}</span>}
      </Label>
    )
  }
}
export { Radio }
