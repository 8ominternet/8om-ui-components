import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Radio } from '../src/Radio'

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
const stories = storiesOf('Radio', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Radio name="gender" />
    <Code>{`<Radio />`}</Code>

    <Title>Default Checked</Title>
    <Radio defaultChecked={true} />
    <Code>{`<Radio defaultChecked />`}</Code>

    <Title>With Label </Title>
    <Radio label="Gender" name="gender" />
    <Code>{`<Radio label="Gender"  />`}</Code>

    <Title>With iconSize </Title>
    <Radio iconSize="40px" name="gender" />
    <Code>{`<Radio iconSize="80px" />`}</Code>

    <Title>Active Color </Title>
    <Radio defaultChecked activeColor="red" />
    <Code>{`<Radio activeColor="red" />`}</Code>

    <Title>Label Style </Title>
    <Radio defaultChecked name="gender" labelStyle={{ color: '#4da1ff' }} label="Gender" />
    <Code>{`<Radio labelStyle={{color:'#4da1ff'}}  />`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Radio
      label={text('label', 'Gender')}
      activeColor={color('activeColor', '#4da1ff')}
      labelStyle={object('labelStyle', { color: '#4da1ff' })}
    />
  </Div>
))
