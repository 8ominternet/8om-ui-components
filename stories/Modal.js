import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Modal } from '../src/Modal'
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
const stories = storiesOf('Modal', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Code>{`<Modal  />`}</Code>

    <Title>Show Modal</Title>
    <Code>{`<Modal show={true} />`}</Code>

    <Title>Change width</Title>
    <Code>{`<Modal width='450px' />`}</Code>

    <Title>Change Modal Title</Title>
    <Code>{`<Modal title="Modal Title" />`}</Code>

    <Title>Change Modal Title Style</Title>
    <Code>{`<Modal titleStyle={{color:red}} />`}</Code>

    <Title>onClose </Title>
    <Code>{`<Modal onClose={()=>console.log(e)} />`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Modal
      show={boolean('show', true)}
      title={text('title', 'Modal Title')}
      titleStyle={object('titleStyle', { color: '#323c47', fontSize: '20px' })}
      onClose={() => alert('Modal Close')}
    />
  </Div>
))
