import { configure, setAddon } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

function loadStories() {
  require('../stories/button')
  // You can require as many stories as you need.
}
setAddon(JSXAddon)
configure(loadStories, module)
