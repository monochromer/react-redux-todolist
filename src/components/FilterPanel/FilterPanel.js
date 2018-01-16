import React, { Fragment } from 'react';

import FilterItemContainer from 'containers/FilterItemContainer';

const filterData = [
    { filter: "ALL", text: "Все" },
    { filter: "COMPLETED", text: "Завершенные" },
    { filter: "ACTIVE", text: "В процессе" }
];

const FilterPanel = () => {
    return (
        <div className='Filter'>
            {
                filterData.map(({filter, ...props}) => {
                    return (
                        <FilterItemContainer
                            key={filter}
                            filter={filter}
                            {...props}
                        />
                    )
                })
            }
        </div>
    )
};

export default FilterPanel