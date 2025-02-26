import React, { useEffect, useState } from "react";

const PostListByAPI = () => {

    const [ loading, setLoading]= useState(false)
    const [ postList, setPostList] = useState(null)

    useEffect (() => {
        setLoading(true)
        fetch ('https://jsonplaceholder.typicode.com/photos/3')
            .then(response => response.json())
            .then(post => {
                setPostList(post)
                setLoading(false)
            })
    },[])
    
    return <div className="bg-warning">
        {!postList && loading && <span>Loading--00--</span>}
        {postList && !loading && Object.keys(postList).length > 0 && 
            <div>
                <h1 className="text-center bg-secodary text-dark m-2 p-3"> Post List Take From API </h1>
                <ul className="list-group bg-info">
                    {Object.keys(postList).map(key => {
                        return <li key={key} className="list-group-item bg-primary d-flex justify-content-between text-white">
                        <span><b>{key}:</b></span>
                        <span>{postList[key]}</span>
                        </li>
                    })}
                </ul>
            </div>
        }
    </div>
}

export default PostListByAPI;