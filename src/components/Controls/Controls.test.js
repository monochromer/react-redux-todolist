import React from 'react';
import { shallow } from 'enzyme';

import Control from './Controls';

describe('components', () => {

    it('should correctly render control component', () => {
        const props = {
            type: 'checkbox',
            value: 'agree',
            children: 'I agree'
        };

        const wrapper = shallow(<Control {...props} />);
        const propsOfInput = wrapper.find('.Control-Input').props();

        expect(wrapper.find('.Control').hasClass('Control--Type-checkbox')).toBe(true);
        expect(wrapper.find('.Control-Text').text()).toBe(props.children);
        expect(propsOfInput.value).toBe(props.value);
    });
});
