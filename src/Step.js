import React from 'react'
import styled, { withTheme } from 'styled-components'

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  padding-left: 20px;
  &:before {
    content: '';
    width: 11px;
    height: 11px;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #e3e9ed;
    z-index: 9;
  }
  &:after {
    content: '';
    width: 1px;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    top: 5px;
    background-color: #e3e9ed;
    z-index: 7;
  }
  &:last-child:after {
    display: none;
    width: 0px;
    opacity: 0;
    background: transparent;
  }
`

const Title = styled.p`
  color: ${props => props.titleColor && props.titleColor};
  font-size: ${props => props.titleSize && props.titleSize};
  line-height: ${props => props.titleSize && props.titleSize};
  margin: 0px;
  letter-spacing: 0.8px;
  padding-bottom: 10px;
`

const Step = ({ title, theme, titleStyle, titleColor = '#323c47', titleSize = '11px', children, ...props }) => (
  <StepWrapper {...props}>
    <Title theme={theme} style={{ titleStyle }} titleColor={titleColor} titleSize={titleSize}>
      {title}
    </Title>
    {children}
  </StepWrapper>
)

export default withTheme(Step)
