import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  width: 100%;
  max-width: ${props => (props.width ? props.width : '100%')};
  min-width: calc(${props => (props.width ? props.width : '100%')} - 200px);
  box-shadow: 0px 4px 9px 0px rgba(6, 5, 2, 0.02);
  padding: ${props => (props.padding ? props.padding : '30px 30px 20px 30px')};
  min-height: ${props => (props.height ? props.height : 'auto')};
`
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Title = styled.p`
  font-size: 16px;
  color: #323c47;
  letter-spacing: 0.5px;
  line-height: 20px;
  margin: 0px;
`
const Options = styled.div`
  font-size: 16px;
  color: #323c47;
  letter-spacing: 0.5px;
  line-height: 20px;
  margin: 0px;
`
class Card extends PureComponent {
  render() {
    const { title, component, children, option, ...props } = this.props
    return (
      <CardWrapper {...props}>
        <CardHeader>
          <TitleWrapper>
            <Title>{title}</Title>
            {component}
          </TitleWrapper>
          <Options>{option}</Options>
        </CardHeader>
        {children}
      </CardWrapper>
    )
  }
}

export { Card }
