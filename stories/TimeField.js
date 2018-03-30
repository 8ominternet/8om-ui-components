import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { TimeField } from '../src/TimeField'
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

const stories = storiesOf('TimeField', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <TimeField format="hr" onChange={value => console.log(value)} />
    <Code>{`<TimeField format="hr" />`}</Code>

    <Title>Format</Title>
    <TimeField format="m" />
    <Code>{`<TimeField format="hr" />`}</Code>

    <Title>Disabled</Title>
    <TimeField disabled />
    <Code>{`<TimeField disabled />`}</Code>

    <Title>Change Label</Title>
    <TimeField label="TimeField" />
    <Code>{`<TimeField label="TimeField" />`}</Code>

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
    <TimeField
      label={text('label', 'TimeField')}
      disabled={boolean('disabled', false)}
      labelStyle={object('labelStyle', { color: '#323c47' })}
      width={text('width', '200px')}
    />
  </Div>
))
