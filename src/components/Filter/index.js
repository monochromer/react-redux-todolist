import React, { Component } from 'react';

import './Filter.css';
import { Control } from 'components/Controls';


const FilterItem = (props) => {
    return (
        <div className='FilterItem'>
            <Control
                key={props.status}
                text={props.text}
                value={props.status}
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

class Filter extends Component {
    constructor(props, context) {
        super(props, context)
    }

    onChangeHandler = (e) => {
        var status = e.target.value;
        const { filterChange } = this.props.filterActions;
        filterChange(status);
    }

    renderFilterItem = (item) => {
        return (
            <FilterItem
                key={item.status}
                onChange={this.onChangeHandler}
                isActive={item.status === this.props.currentFilter}
                {...item}
            />
        )
    }

    render () {
        var controls = this.props.filters.map(item => this.renderFilterItem(item))
        return (
            <div className='Filter'>
                { controls }
            </div>
        )
    }
}

export default Filter
