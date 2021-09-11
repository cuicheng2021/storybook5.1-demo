import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Input from './Input';
import InputComponent from '../components/Input';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Input', module)
  .add('default input', () => <Input onClick={action('clicked')} placeholder='input something'></Input>)
  .add('input with css', () => (
    <Input className='red' onClick={action('clicked!!!')} placeholder='input something'></Input>
  ))
  .add('input with css and value', () => (
    <Input className='red' onClick={action('clicked!!!')} placeholder='input something' value='StoryBook 😀'></Input>
  ));

storiesOf('InputComponent', module)
  .add('default input', () => (
    <InputComponent onClick={action('clicked')} placeholder='InputComponent '></InputComponent>
  ))
  .add('input with css', () => (
    <InputComponent className='red' onClick={action('clicked!!!')} placeholder='InputComponent'></InputComponent>
  ))
  .add('input with value', () => (
    <InputComponent
      className='red'
      onClick={action('clicked!!!')}
      placeholder='input something'
      value='InputComponent 😀'
    ></InputComponent>
  ));
