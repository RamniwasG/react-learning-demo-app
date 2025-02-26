import React, { useEffect, useState } from "react";

const FetchPhotosByid = () => {

    const [loading, setLoading] = useState(false)
    const [photosList, setPhotsList] =  useState(null)

    useEffect (() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/photos/3')
            .then(response => response.json())
            .then(data => {
                setPhotsList(data)
                setLoading(false)
            })
    }, [])
    return <div className='bg-danger p-3 m-4'>
        {!photosList && loading && <span> Loading...000</span>}
        {photosList && ! loading && Object.keys(photosList).length > 0 && 
            <div> 
            <h1 className='text-center bg-success text-daek'>Photos List Taks From API </h1>
                <ul className="list-group">
                    {Object.keys(photosList).map(key => {
                        return <li key = {key} className='list-group-item d-flex text-white  bg-secondary justify-content-between'>
                            <span><b>{key}:</b></span>
                            <span>{photosList[key]}</span>
                        </li>
                    })}
                </ul>
            </div>    
        }
        <h1>Vikash singh</h1>
    </div>
}

export default FetchPhotosByid;