import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Checkbox } from '../src/Checkbox'

const Div = styled.div`
  font-family: sans-serif;
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
const stories = storiesOf('Checkbox', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Checkbox />
    <Code>{`<Checkbox />`}</Code>

    <Title>Default Checked</Title>
    <Checkbox defaultChecked={true} label="saurav" />
    <Code>{`<Checkbox defaultChecked />`}</Code>

    <Title>Change color</Title>
    <Checkbox defaultChecked={true} color="#f50057" />
    <Code>{`<Checkbox defaultChecked color="#f50057"/>`}</Code>

    <Title>Change tick color</Title>
    <Checkbox defaultChecked={true} color="#00bcd4" tickColor="#e91e63" />
    <Code>{`<Checkbox defaultChecked color="#00bcd4" tickColor="#e91e63"/>`}</Code>

    <Title>Circle Checkbox</Title>
    <Checkbox circle />
    <Code>{`<Checkbox circle />`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Checkbox
      label={text('label', 'Gender')}
      color={color('color', '#4da1ff')}
      tickColor={color('tickColor', '#fff')}
      labelStyle={object('labelStyle', { color: '#4da1ff' })}
    />
  </Div>
))
