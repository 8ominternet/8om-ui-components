import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
const StepsWrapper = styled.div`
  // background-color: red;
  position: relative;
  flex-direction: column;
  display: flex;
  ${props =>
    props.activeStep &&
    `
   & > div:before{
    background-color: #4192ec;
   }
   & > div:nth-child(${props.activeStep}) ~ div:before{
    background-color: #e3e9ed !important;
   }
  `};
`
// const Menu = ({ children, ...props }) => <MenuWrapper {...props}>{children}</MenuWrapper>

class Steps extends React.Component {
  render() {
    const { children, themeColor = '#4192ec', activeStep, ...props } = this.props
    return (
      <ThemeProvider theme={{ activeStep: activeStep, themeColor: themeColor }}>
        <StepsWrapper activeStep={activeStep} {...props}>
          {children}
        </StepsWrapper>
      </ThemeProvider>
    )
  }
}

export { Steps }
