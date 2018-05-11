import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from '../src/Icon'
const TooltipWrapper = styled.div`
  position: relative;
  cursor: pointer;
  ${props =>
    props.tooltipText &&
    `
 &:hover{
  & > div{
    visibility: visible;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 91.5%;
    left: 3.8%;
    height: 5px;
    width: 5px;
    border-bottom: 1px solid #4da1ff;
    border-left: 1px solid #4da1ff;
    transform: rotate(-45deg);
    background: #ffffff;
    z-index: 9999;
  }
}
 `};
`
const TooltipText = styled.div`
  visibility: hidden;
  // width: 220px;
  border-radius: 2px;
  background-color: #ffffff;
  border: solid 1px #4da1ff;
  font-size: 12px;
  line-height: 1.33;
  color: #4da1ff;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 3.5%;
  margin-left: -10px;
  padding: 6px 10px;
  text-transform: none;
  max-height: auto;
  &:after {
  }
`
class Tooltip extends Component {
  render() {
    const { icon, tooltipText, ...props } = this.props
    return (
      <TooltipWrapper tooltipText {...props}>
        <Icon icon={icon} />
        <TooltipText>{tooltipText}</TooltipText>
      </TooltipWrapper>
    )
  }
}

export { Tooltip }
