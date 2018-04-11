import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { FileDropzone } from '../src/FileDropzone'
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
const stories = storiesOf('FileDropzone', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <FileDropzone />
    <Code>{`<FileDropzone  />`}</Code>

    <Title>Active </Title>
    <FileDropzone active />
    <Code>{`<FileDropzone active />`}</Code>

    <Title>Disabled</Title>
    <FileDropzone disabled />
    <Code>{`<FileDropzone disabled />`}</Code>

    <Title>With Title </Title>
    <FileDropzone title="I should have re-read my post. " />
    <Code>{`<FileDropzone title="I should have re-read my post. " />`}</Code>

    <Title>Change Icon</Title>
    <FileDropzone icon="project" />
    <Code>{` <FileDropzone icon="project" />`}</Code>

    <Title>Color</Title>
    <FileDropzone color="red" />
    <Code>{`<FileDropzone color="red" />`}</Code>

    <Title>With loading</Title>
    <FileDropzone isLoading />
    <Code>{`<FileDropzone isLoading />`}</Code>

    <Title>loader color </Title>
    <FileDropzone isLoading loaderColor="green" />
    <Code>{`<FileDropzone  loaderColor="green" />`}</Code>

    <Title>Description text</Title>
    <FileDropzone description="Reference site about Lorem Ipsum" />
    <Code>{`<FileDropzone description="Reference site about Lorem Ipsum" />`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <FileDropzone
    label={text('label', 'INPUT FIELD')}
    placeholder={text('placeholder', 'Text Field')}
    placeholderColor={color('placeholderColor', '#4da1ff')}
    loaderColor={color('loaderColor', '#4da1ff')}
    type={select('type', { text: 'text', password: 'password', email: 'email' }, 'password')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    isLoading={boolean('isLoading', false)}
    passwordToggle={boolean('passwordToggle', true)}
    labelStyle={object('labelStyle', { color: '#323c47' })}
  />
))
