import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Search } from '../src/Search'
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
const stories = storiesOf('Search', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Search suggestionComponent />
    <Code>{`<Search  />`}</Code>

    <Title>With Suggestion Component</Title>
    <Search
      suggestionComponent={
        <div>
          <p>Hello</p> <p>How are you ?</p>
        </div>
      }
    />
    <Code>{`<Search suggestionComponent={<Components/>} />`}</Code>

    <Title>With width</Title>
    <Search width="500px" />
    <Code>{`<Search width="500px" />`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Search
      suggestionComponent
      width={text('width', '300px')}
      placeholderColor={color('placeholderColor', '#4da1ff')}
      disabled={boolean('disabled', false)}
      readOnly={boolean('readOnly', false)}
    />
  </Div>
))
