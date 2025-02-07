import {useState, useEffect} from "react"; 

const BasicCard = () => {

        const [cards, setCard] = useState(null);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            setLoading(true);
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    setCard(data)
                    setLoading(false);
                })
        }, [])
             
    return <div className="m-3">
        <h2 className="text-center ">Temporary Card</h2>
        {!cards && loading && <span>Loading...</span>}
        {cards && cards.length === 0 && !loading && <span>No result found</span> }
        {cards && cards.length > 0 && cards.map((card) => {
            return <div key={card.id} className="card">
                <div className="card-header">
                   <h3>{card.id}</h3> 
                </div>    
                <div className="card-body">
                    <h5 className="card-title bg-info">{card.title}</h5>
                    <p className="card-text">{card.body}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                {/* <div className="card-footer text-muted">
                    2 days ago
                </div> */}
            </div>
        })}
    </div> 
}
export default BasicCard;

   

        