import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { ConfirmDialog } from '../src/ConfirmDialog'
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
const stories = storiesOf('ConfirmDialog', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Code>{`<ConfirmDialog  />`}</Code>

    <Title>Show ConfirmDialog</Title>
    <Code>{`<ConfirmDialog show={true} />`}</Code>

    <Title>Change Confirm Dialog Title</Title>
    <Code>{`<ConfirmDialog title="Delete" />`}</Code>

    <Title>Change Confirm Dialog Message</Title>
    <Code>{`<ConfirmDialog message='Are you sure you want to delete selected items ?' />`}</Code>

    <Title>Change ConfirmText</Title>
    <Code>{`<ConfirmDialog confirmText="Yes" />`}</Code>

    <Title>Change cancelText</Title>
    <Code>{`<ConfirmDialog cancelText='No' />`}</Code>

    <Title>onConfirm </Title>
    <Code>{`<ConfirmDialog onConfirm={(e)=>console.log(e)} />`}</Code>

    <Title>onCancel </Title>
    <Code>{`<ConfirmDialog onCancel={(e)=>console.log(e)} />`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <ConfirmDialog
      show={boolean('show', true)}
      title={text('title', 'Delete')}
      message={text('message', 'Are you sure you want to delete selected items ?')}
      confirmText={text('confirmText', 'Yes')}
      cancelText={text('cancelText', 'No')}
      onConfirm={() => alert('Confirm')}
      onCancel={() => alert('Cancel')}
    />
  </Div>
))
