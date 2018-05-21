import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { text, select, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Switcher } from '../src/Switcher'

const Div = styled.div`
  font-family: sans-serif;
`
const Playground = styled.div`
  margin: 100px 220px;
`
const Code = styled.code`
  padding: 20px;
  background: #eceaea;
  border-radius: 2px;
  display: block;
  margin: 10px 0px;
`
const Title = styled.p`
  margin-bottom: 5px;
  font-family: sans-serif;
  padding-top: 20px;
`

const stories = storiesOf('Switcher', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Switcher data={['Monthly', 'Annual']} selected={'Monthly'} onClick={e => console.log(e)} />
    <Code>{`<Switcher data={['Monthly', 'Annual']} selected="Monthly" onClick={e => console.log(e)} />`}</Code>
  </Div>
))

// stories.addWithJSX('Playground', () => (
//   <Playground>
//     <Tooltip
//       tooltipText={text('tooltipText', 'Hey, you are looking at tooltip')}
//       placement={select('placement', { left: 'left', right: 'right', top: 'top', bottom: 'bottom' })}
//       component={<Button label="Submit" />}>
//       <Icon icon="help" />
//     </Tooltip>
//   </Playground>
// ))
