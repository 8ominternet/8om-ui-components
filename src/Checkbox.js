import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  max-height: ${props => (props.circle ? '15px' : '18px')};
  box-sizing: border-box;
  & * {
    box-sizing: border-box;
  }
`
const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 9;
  cursor: pointer;
  &:checked + span {
    background-color: ${props => (props.color ? props.color : '#4192ec')};
    border-color: ${props => (props.color ? props.color : '#4192ec')};
    &:before {
      border-color: ${props => (props.tickColor ? props.tickColor : '#fff')};
    }
  }
  & + span {
    position: relative;
    width: ${props => (props.circle ? '15px' : '18px')};
    height: ${props => (props.circle ? '15px' : '18px')};
    min-width: ${props => (props.circle ? '15px' : '18px')};
    min-height: ${props => (props.circle ? '15px' : '18px')};
    border-radius: ${props => (props.circle ? '50%' : '2px')};
    display: block;
    margin: ${props => (props.flip ? '0 10px 0 0' : '0 0 0 10px')};
    border: ${props => (props.circle ? ' 1px solid #e0e0e0' : ' 2px solid #4a4a4a')};
    z-index: 0;
    transition: 0.2s;
    &:before {
      content: '';
      width: 10px;
      height: 5px;
      position: absolute;
      border-left: 2px solid transparent;
      border-bottom: 2px solid transparent;
      transform: rotate(-45deg);
      top: 2px;
      left: 1px;
    }
  }
`
const Label = styled.label`
  display: inline-flex;
  flex-direction: ${props => props.flip && 'row-reverse'};
  align-items: center;
  cursor: pointer;
  & > span:first-child {
    color: ${props => props.labelStyle && props.labelStyle};
  }
`
const Checkbox = ({ circle, label, labelStyle, flip, ...props }) => {
  return (
    <Wrapper circle={circle}>
      <Label circle={circle} flip={flip} labelStyle={labelStyle}>
        <span>{label}</span>
        <StyledInput type="checkbox" {...props} flip={flip} />
        <span />
      </Label>
    </Wrapper>
  )
}

export { Checkbox }
