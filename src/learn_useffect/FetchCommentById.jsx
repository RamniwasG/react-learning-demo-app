import React, { useState, useEffect } from "react";

 const FetchCommentById = () => {
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState(null)

    useEffect(() => {
      setLoading(true)
       fetch('https://jsonplaceholder.typicode.com/comments/1')
          .then(response => response.json())
          .then(data => {
              setComments(data)
              setLoading(false)
          })
    }, [])

  return <div className="bg-success m-3 p-4">
    {!comments && loading && <span>Loading...</span> }
    {comments && !loading && Object.keys(comments).length > 0 && 
      <div> 
        <h1 className="text-center bg-warning text-dark">Comments Take form API By Id</h1>
          <ul className="list-group d-flex justify-content-between bg-warning text-white" style={{listStyleType:'none', padding:'8px'}}>
             {Object.keys(comments).map(key => {
                   return <li key={key}>
                   <span><b className="text-dark">{key}-:  </b></span>
                   <span>{comments[key]}</span>
               </li>
             })}
          </ul>
      </div>
    }
  </div>
}
export default FetchCommentById;





// const FetchCommentById = () => {

//   const [loading, setLoading] = useState(false)
//   const [comments, setComments] = useState(null)

//   useEffect (() => {
//       setLoading(true)
//       fetch('https://jsonplaceholder.typicode.com/comments/3')
//       .then(response => response.json())
//       .then(data => {
//         setComments(data)
//         setLoading(false)
//       });
//   }, [])

//   return (
//     <div className='m-4'>
//       {!comments && loading && <span>Loading...</span> }
//       {comments && !loading  && Object.keys(comments).length > 0 && 
//         <div>
//           <h1 className="text-center bg-success m-2 ">Comment Take from API By Id</h1>
//           <ul className="list-group">
//           {Object.keys(comments).map(key => {
//             return <li key={key} className="list-group-item d-flex justify-content-between">
//               <span><b>{key}:</b></span>
//               <span>{comments[key]}</span>
//             </li>
//           })}
//           </ul>
//         </div>
//       } 
//     </div>
// )
// }