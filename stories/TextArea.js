import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { TextArea } from '../src/TextArea'
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
const stories = storiesOf('TextArea', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <div>
    <Title>Default</Title>
    <TextArea />
    <Code>{`<TextArea  />`}</Code>

    <Title>Disabled</Title>
    <TextArea disabled />
    <Code>{`<TextArea disabled />`}</Code>

    <Title>Read only</Title>
    <TextArea readOnly />
    <Code>{`<TextArea readOnly />`}</Code>

    <Title>Placeholder Color</Title>
    <TextArea placeholder="TextArea Field" placeholderColor="#4da1ff" />
    <Code>{` <TextArea placeholder="TextArea Field" placeholderColor="#4da1ff" />`}</Code>

    <Title>With Label</Title>
    <TextArea label="FIRST NAME" />
    <Code>{`<TextArea label="FIRST NAME" />`}</Code>

    <Title>Password visibility toggle</Title>
    <TextArea type="password" />
    <Code>{`<TextArea type="password" />`}</Code>

    <Title>Remove Password visibility Icon</Title>
    <TextArea type="password" passwordToggle={false} />
    <Code>{`<TextArea type="password" passwordToggle={false} />`}</Code>
  </div>
))

stories.addWithJSX('Playground', () => (
  <TextArea
    label={text('label', 'TEXTAREA FIELD')}
    placeholder={text('placeholder', 'TextArea Field')}
    placeholderColor={color('placeholderColor', '#4da1ff')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    labelStyle={object('labelStyle', { color: '#323c47' })}
  />
))
