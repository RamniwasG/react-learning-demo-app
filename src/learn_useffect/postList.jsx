import { useEffect, useState } from "react";

const PostList = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState([false])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
    }, [])
    return <div className="m-3">
        <h2 className="text-center text-warning
        ">Temporary Data:</h2>
        <hr />
        {!posts && loading && <span>Loading...</span>}
        {posts && posts.length === 0 && !loading && <span>No result found!</span>}
        <h1 className="text-center text-success
        ">List Data</h1>
        {posts && posts.length > 0 &&
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="w-15"><b>Id</b></span>
                    <span className="w-15"><b>UserID</b></span>
                    <span className="w-55"><b>Title</b></span>
                    <span className="w-15"><b>Completed</b></span>
                </li>
                {posts.map((post) => {
                        return <li key={post.id} className="list-group-item d-flex">
                        <span className="w-15">{post.id},</span>
                        <span className="w-15">{post.userId},</span>
                        <span className="w-55">{post.title},</span>
                        <span className="w-15">{post.completed ? 'true' : 'false'}</span>
                    </li>
                })}
            </ul>
        }
        <hr/>
        <h1 className="text-center text-secondary">Table Data</h1>
        <hr/>
        {posts && posts.length > 0 && 
            <table className="table table-info">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => {
                        return <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.completed ? 'true' : 'false'}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            }
         <hr/>
    </div>
}

export default PostList;
