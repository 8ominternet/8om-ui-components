import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { WithNotes } from '@storybook/addon-notes'
import { select, withKnobs } from '@storybook/addon-knobs/react'

import Button from '../src/button'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)

stories
  .add('normal state', () => (
    <WithNotes notes="This is the normal state of the buttons">
      <Button onClick={action('clicked')} type="primary" />
    </WithNotes>
  ))
  .add('with message', () => (
    <WithNotes notes={`Using prop "message" to change the button text`}>
      <Button onClick={action('clicked')} type={select('message', { red: 'Red', green: 'Green' }, 'red')} />
    </WithNotes>
  ))
