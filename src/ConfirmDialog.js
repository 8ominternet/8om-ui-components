import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const ConfirmWrapper = styled.section`
  position:fixed; 
  width:100%
  height:100%;
  background-color: rgba(0, 0, 0, 0.08);
  display:${props => (props.show ? 'flex' : 'none')};
  justify-content:center;
  align-items:center;
  z-index: 2147483647;
  top: 0px;
  left: 0px;
`
const ConfirmBox = styled.div`
  animation: ${zoomIn} 0.2s linear;
  width: 500px;
  height: 200px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 2px rgba(204, 204, 204, 0.5);
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`
const Title = styled.h4`
  font-size: 24px;
  color: #4a4a4a;
  text-align: center;
  margin: 0px;
  padding-top: 30px;
  font-weight: 400;
  padding-bottom: 20px;
`
const Message = styled.p`
  font-size: 16px;
  text-align: center;
  color: #4e5358;
  margin: 0px;
  padding-bottom: 30px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ActionButton = styled.button`
  min-width: 82px;
  height: 36px;
  padding: 0 15px;
  border: none;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  color: ${props => (props.cancel ? '#757575' : '#ffffff')};
  border-radius: 2px;
  background-color: ${props => (props.cancel ? '#ffffff' : '#4192ec')};
  margin: 0px 10px;
  border: solid 1px ${props => (props.cancel ? 'rgba(117, 117, 117, 0.4)' : '#4192ec')};
  transition: 0.2s;
  ${props =>
    !props.cancel &&
    `
  box-shadow: 0 1px 3px 0 #9b9b9b;
  `};
  &:active {
    ${props =>
      props.cancel
        ? `
  box-shadow: 0 1px 3px 0 #9b9b9b;
    `
        : `
  box-shadow: none;
    `};
  }
`
class ConfirmDialog extends React.Component {
  render() {
    const {
      show = false,
      title = 'Delete',
      message = 'Are you sure you want to delete selected items ?',
      onConfirm,
      onCancel,
      confirmText = 'Yes',
      cancelText = 'No'
    } = this.props
    return (
      <ConfirmWrapper show={show}>
        <ConfirmBox>
          <Title>{title}</Title>
          <Message>{message}</Message>
          <ButtonWrapper>
            <ActionButton cancel onClick={onCancel ? () => onCancel(false) : () => null}>
              {cancelText}
            </ActionButton>
            <ActionButton onClick={onConfirm ? () => onConfirm(true) : () => null}>{confirmText}</ActionButton>
          </ButtonWrapper>
        </ConfirmBox>
      </ConfirmWrapper>
    )
  }
}

export { ConfirmDialog }
