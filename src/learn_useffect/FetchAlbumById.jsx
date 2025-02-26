// import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";

const FetchAlbumById = () => {
    const [ albums, setAlbums] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums/1')
            .then(response => response.json())
            .then(data => {
                setAlbums(data)
                setLoading(false)
            })
    }, [])

    return <div>
        {!albums && loading && <span>Loading...</span> }
        {albums && !loading && Object.keys(albums).length > 0 && 
        <div> 
            <h1>Albums List recieve by api data fetch:</h1>
            <ul className="bg-warning">
                {Object.keys(albums).map(key =>{
                    return <li key={key} className="list-group-itme text-white">
                        <span className="dark">{key}:</span>
                        <span className="dark">{albums[key]}</span>
                    </li>
                })}
            </ul>    
        </div>
        }
    </div>
}

export default FetchAlbumById;

// const FetchAlbumById = () => {

//     const [loading, setLoading] = useState(false)
//     const [albums, setAlbums] = useState(null) 

//     useEffect(() => {
//         setLoading(true)
//         fetch('https://jsonplaceholder.typicode.com/comments/1')
//             .then (response => response.json())
//             .then(data => {
//                 setAlbums(data)
//                 setLoading(false)
//             }) 
//     }, [])
//     return <div className="m-3">
//         {!albums && loading && <span>Loading...</span> }
//         {albums && !loading && Object.keys(albums).length > 0 &&
//             <div>
//                 <h1>Album Take From API By Id</h1>
//                     <ul className="list-group">
//                         {Object.keys(albums).map(key => {
//                             return <li key = {key} className='list-group-item'>
//                             <span><b>{key}:</b></span>
//                             <span>{albums[key]}</span>

//                         </li> 
//                         })}
//                     </ul>
//             </div> 
//         }
//     </div>
// }

// export default FetchAlbumById;