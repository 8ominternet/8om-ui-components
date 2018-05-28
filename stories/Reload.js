import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Reload } from '../src/Reload'

const Div = styled.div`
  font-family: sans-serif;
`
const Code = styled.code`
  margin-top: 20px;
  padding: 20px;
  background: #eceaea;
  border-radius: 2px;
  display: block;
  margin: 40px 0px;
`
const Title = styled.p`
  margin-bottom: 5px;
  font-family: sans-serif;
  padding-top: 20px;
`

const stories = storiesOf('Reload', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Reload run />
    <Code>{`<Reload run />`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Reload run={boolean('run', false)} />
  </Div>
))
