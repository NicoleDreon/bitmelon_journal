function Memory(props) {
    return (
        <div className="card col-3" style={{" marginBottom":"10px"}}><br/>
            <h3 id="memory-header" className="card-header">{props.melon_name}</h3>
            <h4 className="card-body">Ate on {props.date} with {props.friend}</h4>
            <h4 className="card-body">Location: {props.location}</h4>
            <h4 className="card-body">About this day: {props.memory}</h4>
        </div>
    )
} 

 