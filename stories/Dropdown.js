import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Dropdown } from '../src/Dropdown'
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

const stories = storiesOf('Dropdown', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Dropdown options={options} />
    <Code>{`<Dropdown  />`}</Code>

    <Title>Disabled</Title>
    <Dropdown disabled />
    <Code>{`<Dropdown disabled />`}</Code>

    <Title>Change Text</Title>
    <Dropdown text="Dropdown" />
    <Code>{`<Dropdown text="Dropdown" />`}</Code>

    <Title>textStyle</Title>
    <Dropdown textStyle={{ fontSize: '12px' }} />
    <Code>{`<Dropdown textStyle={{fontSize: '12px'}} />`}</Code>

    <Title>textColor</Title>
    <Dropdown textColor="red" />
    <Code>{`<Dropdown textColor={{color:'red'}} />`}</Code>

    <Title>iconColor</Title>
    <Dropdown iconColor="red" />
    <Code>{`<Dropdown iconColor='red' />`}</Code>

    <Title>With Width</Title>
    <Dropdown options={options} width={'200px'} />
    <Code>{`<Dropdown width={'200px'}`}</Code>
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
    <Dropdown
      label={text('label', 'Dropdown')}
      text={text('text', 'Example')}
      disabled={boolean('disabled', false)}
      labelStyle={object('labelStyle', { color: '#323c47' })}
      textStyle={object('textStyle', { fontSize: '12px' })}
      textColor={color('textColor', '#4da1ff')}
      iconColor={color('iconColor', '#4da1ff')}
      width={text('width', '200px')}
    />
  </Div>
))
