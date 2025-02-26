import React from "react";

const MultipleProps = (props) => {
    return <div>
        <h3>Name:{props.name} </h3>
        <p>Age:{props.age} </p>
{/* 
        MultipleProps.defaultProps = {
            name:'Vikash'
       } */}
    </div>
}

export default MultipleProps;

// const Greeting = (props) => {
//     return <div>
//         <h1>Hello {props.name}</h1>
//     </div>
// }
// export default Greeting;
