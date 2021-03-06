import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Provider } from 'react-redux';
import store from '../../internal/configureStore';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';

import Slider from './Slider';

const introText = `
  Text fields enable the user to interact with and input data. A single line
  field is used when the input anticipated by the user is a single line of
  text as opposed to a paragraph.
`;

storiesOf('Slider', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(story => (
    <Provider store={store}>
      <FormWrapper>{story()}</FormWrapper>
    </Provider>
  ))
  .addWithInfo(
    'Redux Form Slider',
    `
      ${introText}
      The example below shows an enabled Slider Input component.
    `,
    () => (
      <Field
        component={Slider}
        labelText="Label"
        name="Input"
        min={0}
        max={100}
      />
    )
  );
