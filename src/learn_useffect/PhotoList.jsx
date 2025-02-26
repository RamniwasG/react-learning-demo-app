// import { useEffect, useState } from "react";
import React from "react";

const PhotoList = () => {
    // const [loading, setLoading] = useState(false);
    // const [photosList, setPhotosList] = useState(null);
    // const [selectedPhoto, setSelectedPhoto] = useState(null);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then((resp) => resp.json())
    //     .then(result => {
    //         setPhotosList(result);
    //         setLoading(false)
    //     })
    // }, [])


    // called Optional chaining
    // selectedPhoto?.id

    // return <div className="p-2" style={{maxHeight: '850px', overflowY: 'auto'}}>
    //     <h2>Photos List</h2>
    //     {!photosList && loading && <span>Loading...</span>}
    //     {photosList && photosList.length === 0 && !loading && <span>No result found!</span>}
    //     {photosList && photosList.length > 0 && photosList.map((photo) => {
    //         return <div key={photo.id} className="p-1 row">
    //             <div class="col-4 card shadow p-2 mb-3 bg-body rounded"
    //                 onClick={() => setSelectedPhoto(photo)}
    //                 style={{width: '18rem', border: photo.id === selectedPhoto?.id ? '2px solid black' : '0px' }}
    //             >
    //                 <img src={`https://picsum.photos/${photo.id*100}`} width="200px" height="200px" class="card-img-top" alt={photo.title} />
    //                 <div class="card-body">
    //                     <p class="card-text">{photo.title}</p>
    //                 </div>
    //             </div>
    //             <div className="col-8 p-3">
    //                 {photo.id === selectedPhoto?.id
    //                     ? <>
    //                             <p><b>Id:</b> {photo.id}</p>
    //                             <p><b>AlbumId:</b> {photo.albumId}</p>
    //                             <p><b>Url:</b> {photo.url}</p>
    //                             <p><b>Thumbnail Url:</b> {photo.id}</p>
    //                         </> 
    //                     : ''
    //                 }
    //             </div>
    //         </div>
    //     })}
    // </div>
    return <div>
              <h1 style={{marginTop: '150px', padding:'8px', backgroundColor:'lightblue', color:'red', textAlign: 'center'}}> This is in the 'PhotoList' component</h1>
        </div>
}

export default PhotoList;


// import { useEffect, useState } from "react";

// const PhotoList = () => {
//     const [loading, setLoading] = useState(false);
//     const [photosList, setPhotosList] = useState(null);
//     const [selectedPhoto, setSelectedPhoto] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         fetch('https://jsonplaceholder.typicode.com/photos')
//         .then((resp) => resp.json())
//         .then(result => {
//             setPhotosList(result);
//             setLoading(false)
//         })
//     }, [])


//     // called Optional chaining
//     // selectedPhoto?.id

//     return <div className="p-2" style={{maxHeight: '850px', overflowY: 'auto'}}>
//         <h2>Photos List</h2>
//         {!photosList && loading && <span>Loading...</span>}
//         {photosList && photosList.length === 0 && !loading && <span>No result found!</span>}
//         {photosList && photosList.length > 0 && photosList.map((photo) => {
//             return <div key={photo.id} className="p-1 row">
//                 <div class="col-4 card shadow p-2 mb-3 bg-body rounded"
//                     onClick={() => setSelectedPhoto(photo)}
//                     style={{width: '18rem', border: photo.id === selectedPhoto?.id ? '2px solid black' : '0px' }}
//                 >
//                     <img src={`https://picsum.photos/${photo.id*100}`} width="200px" height="200px" class="card-img-top" alt={photo.title} />
//                     <div class="card-body">
//                         <p class="card-text">{photo.title}</p>
//                     </div>
//                 </div>
//                 <div className="col-8 p-3">
//                     {photo.id === selectedPhoto?.id
//                         ? <>
//                                 <p><b>Id:</b> {photo.id}</p>
//                                 <p><b>AlbumId:</b> {photo.albumId}</p>
//                                 <p><b>Url:</b> {photo.url}</p>
//                                 <p><b>Thumbnail Url:</b> {photo.id}</p>
//                             </> 
//                         : ''
//                     }
//                 </div>
//             </div>
//         })}
//     </div>
// }

// export default PhotoList;