import React from 'react'

import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Input } from '../src/Input'

const stories = storiesOf('Input', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.addWithJSX('Default', () => <Input />)
stories.addWithJSX('Disabled', () => <Input disabled />)
stories.addWithJSX('ReadOnly', () => <Input readOnly />)
stories.addWithJSX('Placeholder Color', () => <Input placeholder="Input Field" placeholderColor="#4da1ff" />)
stories
  .addWithJSX('With Label', () => <Input label="FIRST NAME" />)

  .addWithJSX('Playground', () => (
    <Input
      label={text('label', 'INPUT FIELD')}
      placeholder={text('placeholder', 'Text Field')}
      placeholderColor={color('placeholderColor', '#4da1ff')}
      disabled={boolean('disabled', false)}
      readOnly={boolean('readOnly', false)}
      labelStyle={object('labelStyle', { color: '#323c47' })}
    />
  ))
