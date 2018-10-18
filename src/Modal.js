import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Icon } from './Icon'

const zoomIn = keyframes`
  from {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`

const ModalWrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.08);
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 2147483647;
  top: 0px;
  left: 0px;
`
const ModalBox = styled.div`
  animation: ${zoomIn} 0.2s linear;
  width: 100%;
  padding: 20px;
  max-width: ${props => (props.width ? props.width : '650px')};
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 2px rgba(204, 204, 204, 0.5);
  @media(max-width: 768px){
    padding: 24px 16px;
  }
`
const Title = styled.h4`
  font-size: 24px;
  color: #4a4a4a;
  text-align: center;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 20px;
  margin: 0px;
`
const ModalHead = styled.div`
  margin: 0px;
  position: relative;
`

const ContentContainer = styled.div`
  width: 100%;
  max-height: 350px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: #ececec;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 6px;
    background-color: #4192ec;
  }
`
const CloseIcon = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`
class Modal extends React.Component {
  render() {
    const { show = false, title = 'Terms & Conditions', onClose, children, titleStyle, ...props } = this.props
    return (
      <ModalWrapper show={show}>
        <ModalBox {...props}>
          <ModalHead>
            <CloseIcon onClick={onClose ? () => onClose() : () => null}>
              <Icon icon="close" />
            </CloseIcon>
            <Title style={titleStyle}>{title}</Title>
          </ModalHead>
          <ContentContainer>{children}</ContentContainer>
        </ModalBox>
      </ModalWrapper>
    )
  }
}

export { Modal }
