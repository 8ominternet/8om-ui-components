import React, { Component } from 'react'
import styled from 'styled-components'
const TooltipWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  &:hover {
    & path {
      fill: #4da1ff;
    }
    ${props =>
      props.tooltip &&
      `
    &:before {
      content: '${props.tooltip}';
      min-width: 100px;
      position: absolute;
      opacity: 1;
      transition: all 0.15s ease;
      padding: 6px 10px;
      font-size: 12px;
      line-height: 1.33;
      color: #4da1ff;
      border-radius: 2px;
      background-color: #ffffff;
      border: solid 1px #4da1ff;
      text-transform: none;
      bottom: 94%;
    }
    &:after{
      transition: all 0.15s ease;
      content: '';
      position: absolute;
      bottom: 85%;
      left: 34%;
      height: 5px;
      width: 5px;
      border-bottom: 1px solid #4da1ff;
      border-left: 1px solid #4da1ff;
      transform: rotate(-45deg);
      background: #ffffff;
      z-index: 9999;
      opacity: 1;
    }
    `};
  }
`

class Tooltip extends Component {
  render() {
    const { tooltip, ...props } = this.props
    return (
      <TooltipWrapper tooltip={tooltip} {...props}>
        {this.props.children}
      </TooltipWrapper>
    )
  }
}

export { Tooltip }
