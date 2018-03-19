import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Input } from '../src/Input'
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
const stories = storiesOf('Input', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <div>
    <Title>Default</Title>
    <Input />
    <Code>{`<Input  />`}</Code>

    <Title>Disabled</Title>
    <Input disabled />
    <Code>{`<Input disabled />`}</Code>

    <Title>Read only</Title>
    <Input readOnly />
    <Code>{`<Input readOnly />`}</Code>

    <Title>Placeholder Color</Title>
    <Input placeholder="Input Field" placeholderColor="#4da1ff" />
    <Code>{` <Input placeholder="Input Field" placeholderColor="#4da1ff" />`}</Code>

    <Title>With Label</Title>
    <Input label="FIRST NAME" />
    <Code>{`<Input label="FIRST NAME" />`}</Code>

    <Title>Password visibility toggle</Title>
    <Input type="password" />
    <Code>{`<Input type="password" />`}</Code>

    <Title>Remove Password visibility Icon</Title>
    <Input type="password" passwordToggle={false} />
    <Code>{`<Input type="password" passwordToggle={false} />`}</Code>
  </div>
))

stories.addWithJSX('Playground', () => (
  <Input
    label={text('label', 'INPUT FIELD')}
    placeholder={text('placeholder', 'Text Field')}
    placeholderColor={color('placeholderColor', '#4da1ff')}
    type={select('type', { text: 'text', password: 'password', email: 'email' }, 'password')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    passwordToggle={boolean('passwordToggle', true)}
    labelStyle={object('labelStyle', { color: '#323c47' })}
  />
))
