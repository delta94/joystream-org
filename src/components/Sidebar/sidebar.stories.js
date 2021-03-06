import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ScrollProvider } from '../_enhancers/ScrollContext';

import Sidebar from './index';
import { roles } from './mockData';

storiesOf('Section|Sidebar', module).add('default', () => (
  <ScrollProvider>
    <div style={{ height: '2000px' }}>
      <div style={{ height: '500px', backgroundColor: 'black' }}></div>
      <Sidebar
        data={roles}
        currentElement="validator"
        onElementChange={() => action('clicked')}
      />
    </div>
  </ScrollProvider>
));
