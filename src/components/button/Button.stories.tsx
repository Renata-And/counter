import { action } from '@storybook/addon-actions';
import { Button } from "./Button";

export default {
  title: 'Button',
  component: Button,
}

export const Primary = () => {
  return <Button title={'Click on me'} onClick={() => action('clicked')} />
}

export const Disabled = () => {
  return <Button title={'Click on me'} onClick={() => action('clicked')} disabled />
}
