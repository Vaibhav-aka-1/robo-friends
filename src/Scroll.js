import React from 'react';

const Scroll = (props) => {
    return(
        <div style = {{overflow : 'scroll' , border: '3px solid #000' ,height: '900px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;