import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Icon } from './Icon'

const ItemWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  // z-index: 99999;
  &:hover {
    &:after {
      content: '';
      width: 10px;
      height: 100%;
      position: absolute;
      box-shadow: ${props => (props.active ? ' 2px 1px 11px 0px inherit' : 'none')} !important;
      left: 0px;
      background-color: ${props => (props.theme.themeColor ? props.theme.themeColor : '#4192ec')};
      border-radius: 0 8px 8px 0;
      z-index: 9;
      ${props =>
        props.theme.verticalAlign &&
        `
        top: 0px;
        left: unset;
        width: 100%;
        height: 10px;
        border-radius: 0px 0px 8px 8px;
        `};
    }
    & > div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(233, 239, 244, 0.4);
      &:after {
        // content: '';
        // position: absolute;
        // width: 50px;
        // height: 50px;
        // border-radius: 50%;
        // background-color: #fafcfe;
        // z-index: -1;
      }
    }
  }

  ${props =>
    props.active &&
    `
    & > div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(233, 239, 244, 0.4);
      &:after {
        content: '';
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        // background-color: #fafcfe;
        border: 1px solid rgba(233, 239, 244, 0.4); 
        // z-index: -1;
      }
    }
  &:after {
    content: '';
    width: 10px;
    height: 100%;
    position: absolute;
    left: 0px;
    border-radius: 0 8px 8px 0;
    box-shadow: 2px 1px 11px 0px rgba(1,172,253,1);
    z-index: 9;
  }
  `};

  ${props =>
    props.theme &&
    `
    &:after {
      background-color:${props.theme.themeColor} ;
    box-shadow: 2px 1px 11px 0px ${props.theme.themeColor} !important;
  `};

  ${props =>
    props.theme.verticalAlign &&
    `
    top: 0px;
    left: unset;
    width: 100%;
    height: 10px;
    border-radius: 0px 0px 8px 8px;
    `};
`
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`
const ItemName = styled.p`
  color: ${props => (props.theme.themeColor ? props.theme.themeColor : '#4192ec')};
  font-size: 15px;
  margin: 0px;
  padding: 16px 0px 6px 0px;
  line-height: 20px;
`

const MenuItem = ({ iconName, theme, children, ...props }) => (
  <ItemWrapper {...props}>
    <IconWrapper>
      <Icon icon={iconName ? iconName : 'overview'} color={theme.themeColor ? theme.themeColor : '#4da1ff'} />
    </IconWrapper>
    <ItemName theme={theme}>{children}</ItemName>
  </ItemWrapper>
)

export default withTheme(MenuItem)
