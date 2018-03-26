import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Card } from '../src/Card'
import { Button } from '../src/Button'
import { Icon } from '../src/Icon'
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

const stories = storiesOf('Card', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories
  .add('Example', () => (
    <Div>
      <Title>Default Size</Title>
      <Card />
      <Code>{`<Card/>`}</Code>

      <Title>With Title</Title>
      <Card title="Title" />
      <Code>{`<Card title='Title' />`}</Code>

      <Title>Render Componet with title</Title>
      <Card title="Title - " component={<Button label="Button" />} />
      <Code>{`<Card component={<Button/>} />`}</Code>

      <Title>With Option</Title>
      <Card option={<Icon icon={'dotsHorizontal'} />} />
      <Code>{`<Card option={<Icon icon={'dotsHorizontal'} />} />`}</Code>

      <Title>With style</Title>
      <Card style={{ background: '#ccc' }} />
      <Code>{`<Card style={{ background: '#ccc' }} />`}</Code>
    </Div>
  ))

  .addWithJSX('Playground', () => (
    <Div>
      <Card
        title={text('title', 'Card - ')}
        component={text('component', 'component')}
        option={text('option', 'option')}
        style={object('style', { background: '#ccc' })}
      />
    </Div>
  ))
