import React from 'react'
import styled from 'styled-components'
import { setAddon, storiesOf } from '@storybook/react'
import { select, boolean, color, text, withKnobs } from '@storybook/addon-knobs/react'
import JSXAddon from 'storybook-addon-jsx'
import { Button } from '../src/Button'
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

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)
setAddon(JSXAddon)

stories
  .add('Example', () => (
    <div>
      <Title>Default Size</Title>
      <Button />
      <Code>{`<Button/>`}</Code>

      <Title>Medium Size</Title>
      <Button size="medium" />
      <Code>{`<Button size="medium" />`}</Code>

      <Title>Large Size</Title>
      <Button size="large" />
      <Code>{`<Button size="large" />`}</Code>

      <Title>With Label</Title>
      <Button label="Next" />
      <Code>{`<Button label="Next" />`}</Code>

      <Title>Background Color</Title>
      <Button backgroundColor="red" />
      <Code>{`<Button backgroundColor="red" />`}</Code>

      <Title>With border</Title>
      <Button border={'2px solid #4da1ff'} backgroundColor="transparent" color="#4da1ff" />
      <Code>{`<Button border={'2px solid #4da1ff'} backgroundColor="transparent" color="#4da1ff" />`}</Code>

      <Title>With border radius</Title>
      <Button border={'2px solid #4da1ff'} backgroundColor="transparent" color="#4da1ff" borderRadius={'8px'} />
      <Code>{`<Button border={'2px solid #4da1ff'} backgroundColor="transparent" color="#4da1ff" borderRadius={'8px'}  />`}</Code>

      <Title>No shadow</Title>
      <Button
        border={'2px solid #4da1ff'}
        backgroundColor="transparent"
        color="#4da1ff"
        borderRadius={'8px'}
        shadow="none"
      />
      <Code>{`<Button border={'2px solid #4da1ff'} backgroundColor="transparent" color="#4da1ff" borderRadius={'8px'} shadow="none" />`}</Code>

      <Title>Background Color on Hover</Title>
      <Button backgroundColorOnHover="red" />
      <Code>{`<Button backgroundColorOnHover="red" />`}</Code>

      <Title> Color</Title>
      <Button color="red" />
      <Code>{`<Button color="red" />`}</Code>

      <Title> Color on Hover</Title>
      <Button colorOnHover="red" />
      <Code>{`<Button colorOnHover="red" />`}</Code>

      <Title>Loading</Title>
      <Button isLoading />
      <Code>{`<Button isLoading />`}</Code>

      <Title>Loading Color</Title>
      <Button isLoading loadingBgColor={'#b0d5ff'} loadingFgColor={'#d01717'} />
      <Code>{`<Button isLoading loadingBgColor={"#b0d5ff"} loadingFgColor={"#d01717"} />`}</Code>
    </div>
  ))

  .addWithJSX('Playground', () => (
    <Button
      label={text('label', 'Button')}
      size={select('size', { small: 'small', medium: 'medium', large: 'large' }, 'small')}
      backgroundColor={color('backgroundColor', '#4da1ff')}
      color={color('color', '#ffffff')}
      border={text('border', '2px solid #4da1ff')}
      borderRadius={text('borderRadius', '8px')}
      shadow={text('shadow', 'none')}
      backgroundColorOnHover={color('backgroundColorOnHover', '#3c95f9')}
      colorOnHover={color('colorOnHover', '#ffffff')}
      isLoading={boolean('isLoading', false)}
      loadingBgColor={color('loadingBgColor', '#b0d5ff')}
      loadingFgColor={color('loadingFgColor', '#d01717')}
    />
  ))
