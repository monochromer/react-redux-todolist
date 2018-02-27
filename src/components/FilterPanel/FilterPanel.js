import React, { Fragment } from 'react';

import FilterItemContainer from 'containers/FilterItemContainer';

const filterData = [
    { filter: "ALL", text: "filter-all" },
    { filter: "COMPLETED", text: "filter-completed" },
    { filter: "ACTIVE", text: "filter-active" }
];

const FilterPanel = () => {
    return (
        <div className='Filter'>
            {
                filterData.map(({filter, ...rest}) => {
                    return (
                        <FilterItemContainer
                            key={filter}
                            filter={filter}
                            {...rest}
                        />
                    )
                })
            }
        </div>
    )
};

export default FilterPanel
