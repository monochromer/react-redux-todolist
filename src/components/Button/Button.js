import React, { Component }  from 'react';
import cn from 'classnames';

import './Button.css';

const Button = ({
    children,
    tag: Tag = 'button',
    className,
    active,
    ...rest
}) => {
    return (
        <Tag
            className={cn(
                'Button',
                {
                    'Button--Active': !!active
                },
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    )
};

export default Button;
