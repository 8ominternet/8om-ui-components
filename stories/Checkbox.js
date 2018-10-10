import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, color, withKnobs } from '@storybook/addon-knobs/react'
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
    <Checkbox label="Hi! i'm a checkbox" />
    <Code>{`<Checkbox />`}</Code>
    <Title>Default Checked</Title>
    <Checkbox label="Hi! i'm a checkbox" />
    <Code>{`<Checkbox />`}</Code>
    <Title>Style Label</Title>
    <Checkbox label="Hi! i'm a checkbox" labelStyle={'tomato'} />
    <Code>{`<Checkbox />`}</Code>
    <Title>Flip Label</Title>
    <Checkbox label="Hi! i'm a checkbox" flip />
    <Code>{`<Checkbox flip={true}/>`}</Code>
    <Title>Change color</Title>
    <Checkbox defaultChecked={true} label="Hi! i'm a checkbox" color="#f50057" />
    <Code>{`<Checkbox defaultChecked color="#f50057"/>`}</Code>
    <Title>Change tick color</Title>
    <Checkbox defaultChecked={true} label="Hi! i'm a checkbox" color="#00bcd4" tickColor="#e91e63" />
    <Code>{`<Checkbox defaultChecked color="#00bcd4" tickColor="#e91e63"/>`}</Code>.
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Checkbox
      label={text('label', `Hi! i'm a checkbox`)}
      color={color('color', '#4da1ff')}
      tickColor={color('tickColor', '#fff')}
      labelStyle={object('labelStyle', { color: '#4da1ff' })}
      flip={boolean('flip', true)}
    />
  </Div>
))
