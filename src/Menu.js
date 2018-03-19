import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
const MenuWrapper = styled.div`
  // background-color: red;
  position: relative;
  ${props =>
    props.verticalAlign &&
    `
    flex-direction: row;
    display: flex;
  `};
`
// const Menu = ({ children, ...props }) => <MenuWrapper {...props}>{children}</MenuWrapper>

class Menu extends React.Component {
  render() {
    const { children, themeColor = '#4192ec', verticalAlign = false, ...props } = this.props
    return (
      <ThemeProvider theme={{ verticalAlign: verticalAlign, themeColor: themeColor }}>
        <MenuWrapper verticalAlign={verticalAlign} {...props}>
          {children}
        </MenuWrapper>
      </ThemeProvider>
    )
  }
}

export { Menu }
