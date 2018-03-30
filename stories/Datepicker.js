import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Datepicker } from '../src/Datepicker'
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
const options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }, { value: 'three', label: 'Three' }]

const stories = storiesOf('Datepicker', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Datepicker options={options} />
    <Code>{`<Datepicker  />`}</Code>

    <Title>Disabled</Title>
    <Datepicker disabled />
    <Code>{`<Datepicker disabled />`}</Code>

    <Title>With Label</Title>
    <Datepicker label="DatePicker" />
    <Code>{`<Datepicker label="DatePicker" />`}</Code>

    <Title>Change Width</Title>
    <Datepicker width="400px" />
    <Code>{`<Datepicker  width="400px" />`}</Code>

    <p>
      <strong>Note:</strong> See more Options and Methods{' '}
      <a href="https://reactdatepicker.com/" target="_blank">
        Click Here
      </a>
    </p>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Datepicker
      label={text('label', 'Datepicker')}
      disabled={boolean('disabled', false)}
      labelStyle={object('labelStyle', { color: '#323c47' })}
      iconColor={color('iconColor', '#4da1ff')}
      width={text('width', '200px')}
    />
  </Div>
))
