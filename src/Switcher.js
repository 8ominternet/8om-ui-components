import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  // min-width: 187px;
  height: 30px;
  border-radius: 17px;
  background-color: #ffffff;
  border: solid 1px #e5e5e5;
  display: inline-flex;
`
const ActiveButton = styled.div`
  width: 100px;
  max-width: 100%;
  min-width: 100px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
  outline: none;
  background-color: ${props => (props.selected ? props.activeColor : '#ffffff')};
  color: ${props => (props.selected ? props.textColor : '#9b9b9b')};
`
class Switcher extends Component {
  render() {
    const { data, activeColor = '#4da1ff', textColor = '#fff', selected, onClick } = this.props
    const items = data.map((item, key) => (
      <ActiveButton
        key={key}
        onClick={onClick ? () => onClick(item) : () => null}
        activeColor={activeColor}
        textColor={textColor}
        selected={selected === item}>
        {item}
      </ActiveButton>
    ))
    return <ButtonWrapper>{items}</ButtonWrapper>
  }
}

export { Switcher }
