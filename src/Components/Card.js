import React from 'react'

const Card = (props) => {
    const { name, email, id } = props;
    return ( 
        <div className = "pa3 ma2 bw3 grow dib bg-lightest-blue shadow-5" >
        <img src = {`https://robohash.org/${id}/200/100`} alt= "robots"/>
        <h2 > { name } </h2>     
        <h4 > { email } </h4>     
        </div >
    )
}

export default Card;