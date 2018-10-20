import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, withKnobs, color } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { SelectBox } from '../src/SelectBox'
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

const stories = storiesOf('SelectBox', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <SelectBox value={{ value: '1' }} />
    <Code>{`<SelectBox  />`}</Code>

    <Title>Change focus color</Title>
    <SelectBox value={{ value: '1' }} focusColor={'tomato'} />
    <Code>{`<SelectBox  focusColor={'tomato'}/>`}</Code>

    <Title>Disabled</Title>
    <SelectBox disabled />
    <Code>{`<SelectBox disabled />`}</Code>

    <Title>Redesign Option</Title>
    <SelectBox customOptions multi={true} />
    <Code>{`<SelectBox customOptions  />`}</Code>

    <Title>With Label</Title>
    <SelectBox label="FIRST NAME" />
    <Code>{`<SelectBox label="FIRST NAME" />`}</Code>

    <Title>With Width</Title>
    <SelectBox width="600px" />
    <Code>{`<SelectBox width="600px" />`}</Code>

    <Title>With Padding</Title>
    <SelectBox padding="15px" />
    <Code>{`<SelectBox padding="15px" />`}</Code>
    <p>
      <strong>Note:</strong> See more Options and Methods{' '}
      <a href="https://github.com/JedWatson/react-select" target="_blank">
        Click Here
      </a>
    </p>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <SelectBox
      label={text('label', 'INPUT FIELD')}
      disabled={boolean('disabled', false)}
      labelStyle={object('labelStyle', { color: '#323c47' })}
      focusColor={color('focusColor', { color: '#85B325' })}
    />
  </Div>
))
