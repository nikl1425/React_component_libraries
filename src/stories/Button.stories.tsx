import React from 'react';

import { Button } from '../components';

export default {
  title: 'Button',
  component: Button
};

export const Primary = () => {
  return (
  <>
  <p className='py-2'>
  <Button type='primary' disabled={false} onClick={() => console.log("hej")} title="Primary" />
  </p>
  <p className='py-2'>
  <Button type='success' disabled={false} onClick={() => console.log("hej")} title="Success" />'
  </p>
  <p className='py-2'>
  <Button type='fail' disabled={false} onClick={() => console.log("hej")} title="Cancel" />
  </p>
  <p className='py-2'>
  <Button type='alert' disabled={false} onClick={() => console.log("hej")} title="Alert" />
  </p>
  </>
  )
} 

// Template interact control

const Template = (args: any) => (
  <>
  <Button {...args}></Button>
  </>
);

export const InterActive: any = Template.bind({});

InterActive.args = {
  
}
