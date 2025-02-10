// import react from react
// define function
// create state with users and setUsers using useEffect
// useEffect hook
// return
// heading
// conditional statement
// list of heading
// use of map
// return
// key
// list data
// all closing bracket
// export default componant

import { useState, useEffect} from "react";
 
 const UserComp = () => {

      const[ user, setUser ] = useState(null);
      const [loading, setLoading]= useState(false);
   
        useEffect(() => {
              setLoading(true)
              fetch('https://jsonplaceholder.typicode.com/comments')
                  .then(response => response.json())
                  .then(data => {
                      setUser(data)
                      setLoading(false)
                  })
          }, [])

        return <div className="mt-5">
            <h1 className="text-center text-primary heading">Comment as table </h1>
            {!user && loading && <span>Loading...</span>}
            {user && user.length === 0 && !loading && <span>No Data Found </span>}

            <table className="table table-success">
                <thead>
                    <tr>
                        <th className="w-5 text-white">Id</th>
                        <th className="w-10 text-white">Post id</th>
                        <th className="w-25 text-white">Email</th>
                        <th className="w-60 text-white">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {user && user.length > 0 && user.map((data) => {
                    return <tr key={data.id}>
                     <td className="w-5"w>{data.id}</td>
                    <td className="w-10">{data.name}</td>
                    <td className="w-25">{data.email}</td>
                    <td className="w-60">{data.body}</td>
                </tr>
             })}
                   
                </tbody>
            </table>
           

        </div>

 }

 export default UserComp;








