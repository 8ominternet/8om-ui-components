import React from 'react'
import styled, { keyframes } from 'styled-components'

const ButtonWrapper = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  line-height: 1.5;
  position: relative;
  border-radius: 2px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  outline: none;
  cursor: pointer;
  height: 38px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#4da1ff')};
  color: ${props => (props.color ? props.color : '#ffffff')};
  border: none;
  box-shadow: 0px 2px 8px -2px rgba(0, 0, 0, 0.4);
  width: ${props => {
    switch (props.size) {
      case 'medium':
        return '150px'
      case 'large':
        return '180px'
      default:
        return '128px'
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'medium':
        return '15px'
      case 'large':
        return '16px'
      default:
        return '14px'
    }
  }};

  &:hover {
    background-color: ${props => (props.backgroundColorOnHover ? props.backgroundColorOnHover : '#3c95f9')};
    color: ${props => (props.colorOnHover ? props.colorOnHover : '#ffffff')};
  }
  &:active {
    box-shadow: none;
  }

  ${props =>
    props.disabled &&
    `
    background-color:#c4c4c3;
    &:hover{
      background-color:#c4c4c3;

    }
  `};
  ${props =>
    props.isLoading &&
    `
    cursor: not-allowed;
    pointer-events: none;
  `};
`

const spin = keyframes`
0% { transform: rotate(0deg) }
100% {transform: rotate(360deg) }
`
const Circle = styled.div`
  border: 3px solid #b0d5ff;
  border-radius: 50%;
  border-top: 3px solid #ffffff;
  margin: auto;
  width: 20px;
  height: 20px;
  animation: ${spin} 2s linear infinite;
`

class Button extends React.Component {
  static defaultProps = {
    isLoading: false,
    label: 'Button'
  }

  render() {
    const { isLoading, label, ...props } = this.props
    return (
      <ButtonWrapper {...props} isLoading={isLoading}>
        {isLoading ? <Circle /> : label}
      </ButtonWrapper>
    )
  }
}

export { Button }
