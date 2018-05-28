import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  & + p {
    margin: 0px;
    margin-left: 20px;
  }
`
const spiner = keyframes`
0% {
  transform: rotate(0deg);
}
50% {
  transform: rotate(180deg);
}
100% {
  transform: rotate(360deg);
}`

const Loader = styled.div`
  display: block;
  position: absolute;
  transform-origin: 50% 50%;
  border: 2px solid #2196f3;
  border-top-color: transparent;
  width: 14px;
  height: 14px;
  top: 3px;
  border-radius: 50%;
  animation: ${props => (props.run ? `${spiner}` : 'spiner')} 2s linear infinite;
  &:after {
    content: ' ';
    width: 0px;
    height: 0px;
    position: absolute;
    border-style: solid;
    border-width: 4px;
    border-top-width: 0;
    border-color: transparent transparent #2196f3 transparent;
    display: block;
    transform: rotate(45deg);
    top: -8px;
    left: -10px;
    transform-origin: 0px 15px;
  }
`

class Reload extends Component {
  render() {
    const { run } = this.props
    return (
      <Wrapper>
        <Loader run={run} />
      </Wrapper>
    )
  }
}

export { Reload }
