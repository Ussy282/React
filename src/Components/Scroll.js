import React from 'react';



const Scroll = (props) => {
    return (
        <div style={{overflowX: "Scroll", border: "5px solid-grey" ,height: '500px'}}>
            {props.children}
        </div>
    )
}
export default Scroll;