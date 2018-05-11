import { configure, setAddon } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

function loadStories() {
  require('../stories/Button')
  require('../stories/Card')
  require('../stories/Checkbox')
  require('../stories/ConfirmDialog')
  require('../stories/Datepicker')
  require('../stories/Dropdown')
  require('../stories/FileDropzone')
  require('../stories/Input')
  require('../stories/Icon')
  require('../stories/Menu')
  require('../stories/Modal')
  require('../stories/Radio')
  require('../stories/SwitchToggle')
  require('../stories/SelectBox')
  require('../stories/Search')
  require('../stories/Steps')
  require('../stories/TextArea')
  require('../stories/TimeField')
  require('../stories/Tooltip')

  // You can require as many stories as you need.
}
setAddon(JSXAddon)
configure(loadStories, module)
