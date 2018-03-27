import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { number, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Steps } from '../src/Steps'
import Step from '../src/Step'

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

const stories = storiesOf('Steps', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Steps>
      <Step title="OVERVIEW">
        <p>Step 1</p>
      </Step>
      <Step active title="PROJECT">
        <p>Step 2</p>
      </Step>
      <Step title="TASK">
        <p>Step 3</p>
      </Step>
      <Step title="HELP">
        <p>Step 4</p>
      </Step>
      <Step title="SETTING">
        <p>Step 5</p>
      </Step>
    </Steps>
    <Code>
      {` <Steps>
      <Step title="overview"><p>Step</p></Step>
      <Step active title="project">
        Project
<p>Step</p></Step>
      <Step title="task"><p>Step</p></Step>
      <Step title="help"><p>Step</p></Step>
      <Step title="setting"><p>Step</p></Step>
    </Steps>`}
    </Code>

    <Title>Active Step</Title>
    <Steps activeStep={2}>
      <Step title="OVERVIEW">
        <p>Step 1</p>
      </Step>
      <Step active title="PROJECT">
        <p>Step 2</p>
      </Step>
      <Step title="TASK">
        <p>Step 3</p>
      </Step>
      <Step title="HELP">
        <p>Step 4</p>
      </Step>
      <Step title="SETTING">
        <p>Step 5</p>
      </Step>
    </Steps>
    <Code>
      {` <Steps activeStep={2}>
      ....
    </Steps>`}
    </Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Title>Steps</Title>
    <Steps activeStep={number('activeStep', 2)}>
      <Step title="OVERVIEW">
        <p>Step 1</p>
      </Step>
      <Step active title="PROJECT">
        <p>Step 2</p>
      </Step>
      <Step title="TASK">
        <p>Step 3</p>
      </Step>
      <Step title="HELP">
        <p>Step 4</p>
      </Step>
      <Step title="SETTING">
        <p>Step 5</p>
      </Step>
    </Steps>
  </Div>
))
