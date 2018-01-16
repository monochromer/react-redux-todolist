import React, { PureComponent } from 'react';

import './FilterItem.css';
import Control from 'components/Controls';

const FilterItem = (props) => {
    return (
        <div className='FilterItem'>
            <Control
                text={props.text}
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
}

export default FilterItem
