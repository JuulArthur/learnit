import React from 'react';
import './container-with-max-width.css';

export const ContainerWithMaxWidth = (props) => {
    return (
        <div className="containerWithMaxWidth">
            {props.children}
        </div>
    )
};