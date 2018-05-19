import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { text, select, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Tooltip } from '../src/Tooltip'
import { Icon } from '../src/Icon'
import { Button } from '../src/Button'

const Div = styled.div`
  font-family: sans-serif;
`
const Playground = styled.div`
  margin: 100px 220px;
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

const stories = storiesOf('Tooltip', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Tooltip tooltipText={'Hey, you are looking at tooltip!'} placement="right" component={<Button label="Submit" />}>
      <Icon icon="help" />
    </Tooltip>
    <Code>{`<Tooltip placement="right" component={<Button label="Submit" />} tooltipText={'Hey, you are looking at tooltip!'}><Icon icon="information" /></Tooltip>`}</Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Playground>
    <Tooltip
      tooltipText={text('tooltipText', 'Hey, you are looking at tooltip')}
      placement={select('placement', { left: 'left', right: 'right', top: 'top', bottom: 'bottom' })}
      component={<Button label="Submit" />}>
      <Icon icon="help" />
    </Tooltip>
  </Playground>
))
