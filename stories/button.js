import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { WithNotes } from '@storybook/addon-notes'

import Button from '../src/button'

storiesOf('Button', module)
  .add('normal state', () => (
    <WithNotes notes="This is the normal state of the buttons">
      <Button onClick={action('clicked')} />
    </WithNotes>
  ))
  .add('with message', () => (
    <WithNotes notes={`Using prop "message" to change the button text`}>
      <Button onClick={action('clicked')} message="Something" />
    </WithNotes>
  ))
