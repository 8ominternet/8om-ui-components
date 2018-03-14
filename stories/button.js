import React from 'react'

import { setAddon, storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { select, boolean, text, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import Button from '../src/button'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories
  .addWithJSX('Default', () => <Button />)
  .addWithJSX('Medium', () => <Button size="medium" />)
  .addWithJSX('Large', () => <Button size="large" />)
  .addWithJSX('Disabled', () => <Button disabled />)
  .addWithJSX('With Label', () => <Button label="Next" />)
  .addWithJSX('Loading', () => <Button isLoading />)
  .addWithJSX('Playground', () => (
    <Button
      label={text('label', 'Button')}
      size={select('size', { small: 'small', medium: 'medium', large: 'large' }, 'small')}
      isLoading={boolean('isLoading', false)}
    />
  ))
