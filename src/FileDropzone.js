import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'
const FileWrapper = styled.section`
  position: relative;
  display: inline-block;
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

  &:valid {
    & + div {
      border-color: #4da1ff;
      & p {
        color: #4da1ff;
        & > svg {
          fill: #4da1ff;
        }
      }
    }
  }
`
const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${props => (props.width ? props.width : '380px')};
  height: ${props => (props.height ? props.height : '120px')};
  border-radius: 6px;
  background-color: #ffffff;
  border: dashed 1px #e8e6e6;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 20px;
  box-sizing: border-box;
  color: ${props => props.color && props.color};
`
class FileDropzone extends React.Component {
  render() {
    const {
      icon = 'upload',
      title = 'You can also drop your files here',
      description,
      color = '#9b9b9b',
      ...props
    } = this.props
    return (
      <FileWrapper>
        <FileInput type="file" required {...props} />
        <ContentWrapper color={color}>
          <Title color={color}>
            <Icon icon={icon} color={color} />
            {title}
          </Title>
          <Content color={color}>
            {description
              ? description
              : ` Requirement file is a requirement.txt file in which you have to mention the dependencies or python packages
          require to run your Project`}
          </Content>
        </ContentWrapper>
      </FileWrapper>
    )
  }
}

export { FileDropzone }
