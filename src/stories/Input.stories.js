import React from 'react';
import { action } from '@storybook/addon-actions';
import { Input } from './Input';

export default {
  title: 'Input',
  parameters: {
    component: Input,
  },
};

export const Story1 = () => <Input></Input>;
Story1.story = { name: 'with text Story1' };

export const Story2 = () => <Input></Input>;
Story2.story = { name: 'with some emoji' };
