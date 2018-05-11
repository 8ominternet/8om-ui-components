import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { text, select, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
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
const IconGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 600px;
  & p {
    display: flex;
    color: #737373;
    font-size: 15px;
    width: 33.33%;
    align-items: center;
    & svg {
      margin-right: 10px;
    }
  }
`

const stories = storiesOf('Icon', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Icon icon={'overview'} />
    <Code>{`<Icon icon="overview" />`}</Code>

    <Title>With Color</Title>
    <Icon icon="overview" color={'red'} />
    <Code>{`<Icon color={'red'} />`}</Code>

    <Title>With Size</Title>
    <Icon icon={'overview'} width={55} height={55} />
    <Code>{`<Icon icon={'overview'} width={55} height={55} />`}</Code>

    <h3>Available Icons</h3>
    <IconGroup>
      <p>
        <Icon icon={'overview'} /> overview
      </p>
      <p>
        <Icon icon={'passwordShow'} /> passwordShow
      </p>
      <p>
        <Icon icon={'passwordHide'} /> passwordHide
      </p>
      <p>
        <Icon icon={'help'} /> help
      </p>
      <p>
        <Icon icon={'chat'} /> chat
      </p>
      <p>
        <Icon icon={'project'} /> project
      </p>
      <p>
        <Icon icon={'search'} /> search
      </p>
      <p>
        <Icon icon={'setting'} /> setting
      </p>
      <p>
        <Icon icon={'task'} /> task
      </p>
      <p>
        <Icon icon={'user'} /> user
      </p>
      <p>
        <Icon icon={'back'} /> back
      </p>
      <p>
        <Icon icon={'downArrow'} /> downArrow
      </p>
      <p>
        <Icon icon={'upArrow'} /> upArrow
      </p>
      <p>
        <Icon icon={'delete'} /> delete
      </p>
      <p>
        <Icon icon={'github'} /> github
      </p>
      <p>
        <Icon icon={'google'} /> google
      </p>
      <p>
        <Icon icon={'information'} /> information
      </p>
      <p>
        <Icon icon={'calendar'} /> calendar
      </p>
      <p>
        <Icon icon={'clone'} /> clone
      </p>
      <p>
        <Icon icon={'dotsHorizontal'} /> dotsHorizontal
      </p>
      <p>
        <Icon icon={'leftArrow'} /> leftArrow
      </p>
      <p>
        <Icon icon={'rightArrow'} /> rightArrow
      </p>
      <p>
        <Icon icon={'upload'} /> upload
      </p>
      <p>
        <Icon icon={'copy'} /> copy
      </p>
      <p>
        <Icon icon={'close'} /> copy
      </p>
    </IconGroup>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Icon
    icon={select('icon', { overview: 'overview', task: 'task', setting: 'setting', help: 'help' }, 'setting')}
    width={text('width', '35px')}
    height={text('height', '35px')}
    color={color('color', '#4da1ff')}
  />
))
