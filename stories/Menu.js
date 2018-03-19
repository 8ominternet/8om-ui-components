import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { boolean, text, object, color, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Menu } from '../src/Menu'
import MenuItem from '../src/MenuItem'

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

const stories = storiesOf('Menu', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories.add('Example', () => (
  <Div>
    <Title>Default</Title>
    <Menu>
      <MenuItem iconName="overview">Overview</MenuItem>
      <MenuItem active iconName="project">
        Project
      </MenuItem>
      <MenuItem iconName="task">Task</MenuItem>
      <MenuItem iconName="help">Help</MenuItem>
      <MenuItem iconName="setting">Setting</MenuItem>
    </Menu>
    <Code>
      {` <Menu>
      <MenuItem iconName="overview">Overview</MenuItem>
      <MenuItem active iconName="project">
        Project
      </MenuItem>
      <MenuItem iconName="task">Task</MenuItem>
      <MenuItem iconName="help">Help</MenuItem>
      <MenuItem iconName="setting">Setting</MenuItem>
    </Menu>`}
    </Code>

    <Title>Vertical Align</Title>
    <Menu verticalAlign>
      <MenuItem iconName="overview">Overview</MenuItem>
      <MenuItem active iconName="project">
        Project
      </MenuItem>
      <MenuItem iconName="task">Task</MenuItem>
      <MenuItem iconName="help">Help</MenuItem>
      <MenuItem iconName="setting">Setting</MenuItem>
    </Menu>
    <Code>
      {` <Menu verticalAlign>
      ....
    </Menu>`}
    </Code>
    <Title>With themeColor</Title>
    <Menu themeColor={'#c82254'}>
      <MenuItem iconName="overview">Overview</MenuItem>
      <MenuItem active iconName="project">
        Project
      </MenuItem>
      <MenuItem iconName="task">Task</MenuItem>
      <MenuItem iconName="help">Help</MenuItem>
      <MenuItem iconName="setting">Setting</MenuItem>
    </Menu>
    <Code>
      {` <Menu themeColor={'#c82254'}>
      ....
    </Menu>`}
    </Code>
  </Div>
))

stories.addWithJSX('Playground', () => (
  <Div>
    <Title>Menu</Title>
    <Menu themeColor={color('themeColor', '#c82254')} verticalAlign={boolean('verticalAlign', true)}>
      <MenuItem iconName="overview">Overview</MenuItem>
      <MenuItem active iconName="project">
        Project
      </MenuItem>
      <MenuItem iconName="task">Task</MenuItem>
      <MenuItem iconName="help">Help</MenuItem>
      <MenuItem iconName="setting">Setting</MenuItem>
    </Menu>
  </Div>
))
