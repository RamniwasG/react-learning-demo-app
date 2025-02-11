import { useEffect, useState } from "react";

function UsersBiodata () {

    const[ biodata, setBiodata] = useState();
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [cursorStyle, setCursorStyle] = useState('default');

   
    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setBiodata(data)
                setLoading(false)
            })
    }, [])


    const handleUserItemClick = (user) => {
        setSelectedUser(user);
    }


    // render() {
        
    // }

    return  <div>

        <h1>Selected User Info:</h1>
        {JSON.stringify(selectedUser)}
        <button onClick={() => setSelectedUser(null)} className="btn btn-secondary w-25">Clear</button>
        <hr/>
        <h1 className="text-center heading text-warning mt-5">user BioData</h1>
        {!biodata && loading && <span>Loading...</span>}
        {biodata && biodata.length === 0 && !loading && <span>No data found</span>}
        {/* {user && user.length === 0 && !loading && <span>No Data Found </span>} */}

        <table className="table table-stripe">
                <thead>
                    <tr className="text-primary">
                        <th className=" text-white ">Id</th>
                        <th className="text-white">Name</th>
                        <th className="text-white">UserName</th>
                        <th className="text-white">Email</th>
                        {/* <th className="text-white">Street</th>
                        <th className="text-white">Squite</th>
                        <th className="text-white">City</th>
                        <th className="text-white">ZipCode</th>
                        <th className="text-white">Latitude</th>
                        <th className="text-white">longitude</th>
                        <th className="text-white">Phone</th>
                        <th className="text-white">Website</th>
                        <th className="text-white">Name</th>
                        <th className="text-white">CatchPhrase</th>
                        <th className="text-white">BSS</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {biodata && biodata.length > 0  && biodata.map((user, index) =>{
                        return <tr key={user.id+index}
                            className={user.id === selectedUser.id ? 'table-danger' : 'table-primary'}
                            onClick={() => handleUserItemClick(user)}
                        >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        {/* <td>{user.address.street}</td>
                        <td>{user.address.squite}</td>
                        <td>{user.address.city}</td> */}
                        {/* <td>{user.address.zipcode}</td>
                        <td>{user.address.geo.lat}</td>
                        <td>{user.address.geo.lng}</td>
                        <td>{user.phone}</td>
                        <td><a href={user.website} target="_blank">{user.website}</a></td>
                        <td>{user.company.name}</td>
                        <td>{user.company.catchPhrase}</td>
                        <td>{user.company.bs}</td> */}
                        <td style={{textDecoration: 'underline', cursor: cursorStyle }}
                            onMouseOver={() => setCursorStyle('pointer')}
                        >View</td>
                     </tr>
                    })}             
                </tbody>
        </table>
    </div>

}

export default UsersBiodata;
