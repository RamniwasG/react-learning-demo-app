import { useEffect, useState } from "react";

const Apps = ({backgroundColor}) => {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    const [username, setUserName] = useState('');

    useEffect(() => {
        if(count <= 10) {
            setMessage(`Condition ${count}`)
            setUserName('Normal user');
        } else {
            setMessage('Out of range')
            setUserName('You are not a good user');
        }

        if(count <= 10) {
            setUserName('Normal user');
        } else {
            setUserName('You are not a good user');
        }
    }, [count])

    let comp = null;
    if(count <= 10) {
        comp = <h1>{message}</h1>
    } else {
        comp = <h1 style={{color: count > 10 ?  'blue' : 'yellow'}}>{message}</h1> 
    }

    return <div style={{ color: backgroundColor }}>
        <h1>Count</h1>
        <button onClick={() => setCount(count+1)} className="btn btn-primary">count</button>
        {comp}
        <span>{username}</span>
        {count <= 10 ? <h1>{message}</h1> : <h1 style={{color: count > 10 ?  'darkred' : 'black'}}>{message}</h1>}
    </div>
}

export default Apps;