import { action } from '@storybook/addon-actions';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
}

export const NumberType = () => {
  return <Input type={'number'} value={'1'} onChange={() => { action('input changed') }} className='' />
}

