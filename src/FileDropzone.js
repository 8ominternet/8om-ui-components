import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { Icon } from './Icon'
const FileWrapper = styled.section`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 6px;
  &:hover {
    box-shadow: 0 2px 4px 0 #d0d7dd;
  }
`
const Title = styled.p`
  margin: 0px;
  color: ${props => props.color && props.color};
  font-size: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 336px;
  padding-bottom: 10px;
`
const Content = styled.div`
  width: 336px;
  font-size: 14px;
  letter-spacing: -0.1px;
  text-align: center;
  color: ${props => props.color && props.color};
  line-height: 18px;
`
const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 9;
  opacity: 0;

  ${props =>
    props.active &&
    `
    & + div {
      border-color: #4da1ff;
      & p {
        color: #4da1ff;
        & > svg {
          fill: #4da1ff;
        }
      }
    }
    `};
`
const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 6px;
  background-color: #ffffff;
  border: dashed 1px #e8e6e6;
  border-color: ${props => props.active && '#4da1ff'};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 20px;
  box-sizing: border-box;
  color: ${props => props.color && props.color};
`
const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`
const Loading = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid ${props => props.loaderColor};
  border-bottom: 4px solid ${props => props.loaderColor};
  width: 40px;
  height: 40px;
  min-width: 40px;
  animation: ${spin} 2s linear infinite;
`
const FileNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const FileName = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: #4da1ff;
  align-self: center;
`
const DeleteUpload = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #323c47;
  margin: 0px;
  cursor: pointer;
  align-self: flex-end;
  position: absolute;
  top: 12px;
`
class FileDropzone extends React.Component {
  onDelete() {
    alert('Delete')
  }
  render() {
    const {
      icon = 'upload',
      visibleIcon = true,
      title = 'You can also drop your files here',
      description,
      color = '#9b9b9b',
      loaderColor = '#4da1ff',
      width = '380px',
      height = '120px',
      active = false,
      onDelete,
      fileName,
      fileHandlerLabel,
      isLoading = false,
      ...props
    } = this.props
    return (
      <FileWrapper width={width} height={height}>
        {!isLoading && !fileName ? (
          <Fragment>
            <FileInput type="file" active={active} required {...props} />
            <ContentWrapper color={color} width={width} height={height}>
              <Title color={color}>
                {visibleIcon && <Icon icon={icon} color={color} />}
                {title}
              </Title>
              <Content color={color}>{description && description}</Content>
            </ContentWrapper>
          </Fragment>
        ) : null}
        {isLoading && (
          <ContentWrapper width={width} height={height}>
            <Loading loaderColor={loaderColor} />
          </ContentWrapper>
        )}
        {!isLoading && fileName ? (
          <Fragment>
            <ContentWrapper width={width} height={height} active>
              <FileNameWrapper>
                <DeleteUpload onClick={onDelete ? () => onDelete(fileName) : () => null}>
                  {fileHandlerLabel}
                </DeleteUpload>
                <FileName>{fileName}</FileName>
              </FileNameWrapper>
            </ContentWrapper>
          </Fragment>
        ) : null}
      </FileWrapper>
    )
  }
}

export { FileDropzone }
