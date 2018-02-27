import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './FilterItem.css';
import Control from 'components/Controls';

const FilterItem = (props, context) => {
    return (
        <div className='FilterItem'>
            <Control
                text={context.locale(props.text)}
                value={props.filter}
                type='radio'
                name='todo-filter'
                checked={props.isActive}
                onChange={props.onChange}
            />
            <div className='FilterItem-Count'>
                {props.count}
            </div>
        </div>
    );
};

FilterItem.contextTypes = {
    lang: PropTypes.string,
    locale: PropTypes.func
}

export default FilterItem
