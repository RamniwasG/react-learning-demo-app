import React, { useEffect, useState } from "react";

const TodosListByAPI = () => {

    const [loading, setLoading] = useState(false);
    const [photosList, setPhotosList] = useState(null);

    useEffect (() => {
        setLoading(true) 
        fetch('https://jsonplaceholder.typicode.com/photos/3')
            .then(response => response.json())
            .then(res => {
                setPhotosList(res)
                setLoading(false)
            })
    }, [])

    return <div className="bg-warning m-4 p-3">
        {!photosList && loading && <span>Loading....--0--</span>}
        {photosList && !loading && Object.keys(photosList).length > 0 && 
            <div>
                <h1 className="text-center bg-warning text-dark"> Photos List Take by Fake Data</h1>
                <ul className="list-group bg-info">
                    {Object.keys(photosList).map(key => {
                        return <li className="list-group-item bg-success text-white" key={key}>
                            <span>{key}:</span>
                            <span>{photosList[key]}</span>
                        </li>
                    })}

                </ul>
            </div>
        }
        <h1>vikash singh</h1>
    </div>
}

export default TodosListByAPI;