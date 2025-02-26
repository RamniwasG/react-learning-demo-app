import { useEffect, useState } from "react";

const FetchUserById = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users/3')
            .then(response => response.json())
            .then(data => {
                setUser(data)
                setLoading(false)
            })
    }, [])

    return <div className="p-2 bg-warning m-4">
        {!user && loading && <span>Loading...</span>}
        {user && !loading && Object.keys(user).length > 0 && <div>
            <h1 style={{backgroundColor:'green', color: 'black', margin:'8px', padding:'12px',
             borderRadius:'6px', textAlign:'center'}}>User Data Take form API  By Id</h1>
                <ul className="list-group bg-primary" style={{listStyleType:'none', padding:'12px',
                 color:'white', margin:'8px'}}>
                    {Object.keys(user).map(key => {
                        return <li key={key}>
                            {/* const value = user[key]; */}
                            { typeof user[key] !== 'object' 
                                ? (key + ' : ' + user[key]) 
                                : (key === 'address' 
                                    ? `${key} : ${user[key].city}, ${user[key].street}, ${user[key].suite},
                                     ${user[key].zipcode} ` // for address object
                                    // : `key ==='company' ? ${key} : ${user[key].name}, ${user[key].bs}`   
                                    :`${key} : ${user[key].name}, ${user[key].bs}, ${user[key].catchPhrase}` // for company object
                                )
                            }
                        </li>
                    })}
                </ul>
            </div>
        }
    </div>
}

export default FetchUserById;
