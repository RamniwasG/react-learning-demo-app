import React from "react";

const Navigations = (props) => {
    return <>
        <div className="container p-4">
            <ul className="list-group">
                <li className="list-group-item"><a href="home">Home</a></li>
                <li className="list-group-item"><a href="home">contact</a></li>
                <li className="list-group-item"><a href="home">about</a></li>
                <li className="list-group-item"><a href="home">Gallery</a></li>      
            </ul>

            <input type='text' id='fname' name='fname' placeholder="Enter Your Name" />
            <button className='btn btn-dark'type='submit'>Submit</button>
        </div>
    </>
}

export default Navigations;
