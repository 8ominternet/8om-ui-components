import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
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
//const options = {}
// for (let i = 1; i <= 30; i++) {
//   options.push({ value: `${i}`, label: `${i}` })
// }

const stories = storiesOf('SelectBox', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <SelectBox value={{ value: '1' }} />
    <Code>{`<SelectBox  />`}</Code>

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
    />
  </Div>
))
