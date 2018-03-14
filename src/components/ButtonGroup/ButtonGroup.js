import React, {
    Children,
    cloneElement
}  from 'react';

import './ButtonGroup.css';

const ButtonGroup = ({ children }) => {
    return (
        <div className='ButtonGroup'>
            {
                Children.map(children, function(child) {
                    return cloneElement(child, {
                        className: 'ButtonGroup-Item'
                    })
                })
            }
        </div>
    )
};

export default ButtonGroup;
