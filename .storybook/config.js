import { configure, setAddon } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

function loadStories() {
  require('../stories/Button')
  require('../stories/Card')
  require('../stories/Dropdown')
  require('../stories/Input')
  require('../stories/Menu')
  require('../stories/Icon')
  require('../stories/Radio')
  require('../stories/SwitchToggle')
  require('../stories/SelectBox')
  require('../stories/Search')

  // You can require as many stories as you need.
}
setAddon(JSXAddon)
configure(loadStories, module)
