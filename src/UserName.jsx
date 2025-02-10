import { useState } from "react";

function UserName({ textColor, bgcolor }) {
    const [display, setDisplay] = useState()

    return <div className="bg-warning">
        <h1 className="text-center" style={{ backgroundColor: bgcolor }}> Change Name:</h1>
        {display ? <h1>Vikash Singh</h1> 
        :<h1 style={{ color: textColor }}>Harsh Gupta( No found any user)</h1>}
        <button onClick={ () => setDisplay(!display)} style={{ color: textColor }}>Change Name</button>
    </div>
}

export default UserName