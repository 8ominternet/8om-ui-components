import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { WithNotes } from '@storybook/addon-notes'

import App from '../src'

storiesOf('Welcome', module).add('to Storybook', () => <App message="storybook" />)
