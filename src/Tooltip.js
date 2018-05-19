import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
const TooltipWrapper = styled.div`
  display: inline;
  cursor: pointer;
  // position: relative;
  ${props =>
    props.tooltipText &&
    `
 &:hover{
  & > div{
    visibility: visible;
  }
}
 `};
`
const TooltipText = styled.div`
  visibility: hidden;
  max-width: 220px;
  padding: 10px 8px;
  position: absolute;
  z-index: 99;
  ${props =>
    props.placement === 'top' &&
    `
  left: ${props.left}px;
  bottom: ${props.bottom}px;
  `};

  ${props =>
    props.placement === 'bottom' &&
    `
    bottom: auto;
    top: ${props.bottom}px;
  `};
  ${props =>
    props.placement === 'right' &&
    `
    
    bottom: auto;
    top: ${props.bottom}px;
    left: ${props.left}px;
  `};
  ${props =>
    props.placement === 'left' &&
    `
    bottom: auto;
    top: ${props.bottom}px;
    right: ${props.left}px;
  `};
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(77, 161, 255, 0.45);
  background-color: #f3f7fa;
  border: solid 1px rgba(77, 161, 255, 0.2);
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.3px;
  color: #4a4a4a;
  transition: ease-in linear 0.2s;
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 8px;
    height: 5px;
    width: 5px;
    border-bottom: 1px solid rgba(77, 161, 255, 0.2);
    border-left: 1px solid rgba(77, 161, 255, 0.2);
    transform: rotate(-45deg);
    background: #f3f7fa;
    z-index: 9999;
    opacity: 1;
    transition: ease-in linear 0.2s;
    ${props =>
      props.placement === 'bottom' &&
      `
    top: -4px;
    left: 10px;
    transform: rotate(135deg);
    `};
    ${props =>
      props.placement === 'left' &&
      `
    top: 10px;
    left: auto;
    right: -4px;
    transform: rotate(225deg);
    `};
    ${props =>
      props.placement === 'right' &&
      `
    top: 10px;
    left: -4px;
    transform: rotate(45deg);
    `};
  }
`
const ComponentWrapper = styled.div``
class Tooltip extends Component {
  state = {
    left: 0,
    top: 0,
    bottom: 0,
    elHeight: 0,
    elWidth: 0
  }
  componentDidMount() {
    const elPosition = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({
      elHeight: elPosition.height,
      elWidth: elPosition.width
    })
  }

  toggle = () => {
    const { placement } = this.props
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const tooltipNode = ReactDOM.findDOMNode(this)
    if (placement === 'bottom') {
      const bottom = tooltipNode.offsetTop + this.state.elHeight
      this.setState({ left: tooltipNode.offsetLeft, top: tooltipNode.offsetTop, bottom: bottom })
    } else if (placement === 'right') {
      const top = tooltipNode.offsetTop
      const left = tooltipNode.offsetLeft + this.state.elWidth
      this.setState({ left: left, top: tooltipNode.offsetTop, bottom: top })
    } else if (placement === 'left') {
      const top = tooltipNode.offsetTop
      const right = windowWidth - tooltipNode.offsetLeft - 14
      this.setState({ left: right, top: tooltipNode.offsetTop, bottom: top })
    } else {
      const bottom = windowHeight - (this.state.top + this.state.elHeight) + 24
      this.setState({ left: tooltipNode.offsetLeft, top: tooltipNode.offsetTop, bottom: bottom })
    }
  }
  render() {
    const { left, top, bottom } = this.state
    const { tooltipText, component, placement = 'top' } = this.props

    return (
      <TooltipWrapper tooltipText onMouseEnter={() => this.toggle()} onMouseOut={() => this.toggle()}>
        <TooltipText left={left} bottom={bottom} component placement={placement}>
          {tooltipText}
          <ComponentWrapper>{component}</ComponentWrapper>
        </TooltipText>
        {this.props.children}
      </TooltipWrapper>
    )
  }
}

export { Tooltip }
