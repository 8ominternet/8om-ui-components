import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Tooltip } from '../src/Tooltip'
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

const stories = storiesOf('Tooltip', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Tooltip tooltip={'Hey, you are looking at tooltip!'}>
      <Icon icon="help" />
    </Tooltip>
    <Code>{`<Tooltip icon="help" tooltipText={'Hey, you are looking at tooltip!'}><Icon icon="information" /></Tooltip>`}</Code>
  </Div>
))
