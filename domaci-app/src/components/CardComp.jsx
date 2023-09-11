export const Card = ({image, name, status})=>{

    var statusClass = "unknown"

    if(status == "Dead"){
        statusClass = "dead"
    }else if(status == "Alive"){
        statusClass = "alive"
    }

    return (<>
    
    <div className="container">
        <div className="prvi">
            <img src={image} alt={name+"'s image didn't load"}/>
        </div>
        <div className="drugi">
            <h1>{name}</h1>
            <div>
                <h2>{"Status: "+status+" "}</h2><div className={"status "+statusClass}></div>
            </div>
        </div>
    </div>
    
    </>)

}