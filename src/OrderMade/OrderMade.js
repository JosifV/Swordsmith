import React from 'react';
import Aux from '../hoc/Aux'

const orderMade = (props) =>{
    return <Aux>
        <br/>
        <div style={{padding:'25px'}}>
        <h1>Congratulations!</h1>
        <h4>Your order has been sent successfully to your email!</h4>
        <p style={{padding:'15px'}}>All the best, J V</p>
        </div>
    </Aux>
}
export default orderMade