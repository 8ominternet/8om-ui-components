import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, select, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { SwitchToggle } from '../src/SwitchToggle'

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
const stories = storiesOf('SwitchToggle', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <SwitchToggle />
    <Code>{`<SwitchToggle />`}</Code>

    <Title>Checked</Title>
    <SwitchToggle checked enabledText="Enable" disabledText="Disable" />
    <Code>{`<SwitchToggle checked />`}</Code>

    <Title>With Text </Title>
    <SwitchToggle enabledText="Enable" disabledText="Disable" />
    <Code>{`<SwitchToggle enabledText="Enable" disabledText="Disable" />`}</Code>

    <Title>With Width </Title>
    <SwitchToggle width={80} />
    <Code>{`<SwitchToggle width={80} />`}</Code>

    <Title>With Background and Text Color </Title>
    <SwitchToggle checked activeBackgroundColor="red" activeTextColor="yellow" />
    <Code>{`<SwitchToggle activeBackgroundColor="red" activeTextColor="yellow"  />`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <SwitchToggle
      enabledText={text('enabledText', 'Enable')}
      disabledText={text('disabledText', 'Disable')}
      activeBackgroundColor={color('activeBackgroundColor', '#4da1ff')}
      activeTextColor={color('activeTextColor', '#FFFFFF')}
      onChange={e => console.log('switch', e)}
    />
  </Div>
))
