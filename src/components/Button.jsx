import React from 'react';
import './Button.css';

export default props =>{
    let classes = 'button '//esse espaço faz tda a diferença, pois se tirar ele perde o estilo 
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : ''
    
    return(
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}