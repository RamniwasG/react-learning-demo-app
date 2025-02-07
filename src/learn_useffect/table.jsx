import { useState, useEffect } from "react";

 const TableData = () => {

    const [data, setData] = useState(null);
    const[loading, setLoading] = useState([false])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])

    return <div className="mt-4">
        <h2 className="text-center text-success">Tabel Data</h2>
        {!data && loading && <span>Loading...</span>}
        {data && data.length === 0 && !loading && <span>No data found</span>}
        {/* {data.length > 0 && */}
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
                    {data && data.length > 0 && data.map((post) => {
                        return <tr key={data.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.completed ? 'true' : 'false'}</td>
                        </tr>
                    })}
                </tbody>
            </table>
    </div>

}
    
export default TableData;
