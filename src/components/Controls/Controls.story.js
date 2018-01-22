import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import Control from './Controls';

const FlexDecorator = (story) => (
    <div style={{ display: 'flex' }}>
        {story()}
    </div>
);

storiesOf('Control', module)
    .addDecorator(FlexDecorator)
    .add('checkbox', () => (
        <Control
            type='checkbox'
            onChange={action('change')}
        />
    ))
    .add('radio', () => (
        <Fragment>
            <WithNotes notes={'controls demo notes'}>
                <Control
                    type='radio'
                    name='radio-group'
                />
                <Control
                    type='radio'
                    name='radio-group'
                />
            </WithNotes>
        </Fragment>
));
