import React , { useState } from 'react';

// const CounterApp = () => {
//     const [count, setCount] = useState(0);

//     return( <div className='text-center'>
//         <h1>Counter App</h1>
        
//         <h1>{count}</h1> 
//         <button className='btn btn-primary' onClick={() => setCount(count + 1)} style={{marginLeft: '16px'}}>Increase</button>

//         <button onClick={() => setCount(count - 1)} style={{marginLeft: '16px'}}>Decrease</button>

//         <button onClick={() => setCount(5)} style={{marginLeft: '16px'}}> Reset</button>

//     </div>
//     )
// }

const CounterApp = () => {
    const [count, setCount] = useState(0);
    return<>     
     <div>
        <h1>The Counter App</h1>
          <h2 className='text-center'>{count}</h2>
    </div>
     <div className='text-center'>
        <button onClick={() => setCount(count + 1)} style={{marginLeft:'20px', backgroundColor:'violet', color:'white'}}>Increase(+)</button>
        <button onClick={() => setCount(count - 1 )} style={{marginLeft:'25px', backgroundColor:'blue', color:'white'}}>Decrease(-)</button>
        <button onClick={() => setCount(0)} className='ms-3 btn btn-warning'>Reset(0)</button>
    </div>
 </>
}

export default CounterApp;