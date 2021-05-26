function Memory(props) {
    return (
        <div className="card col-3" style={{" marginBottom":"10px"}}><br/>
            <h3 className="card-header">{props.melon_name}</h3>
            <h5 className="card-body">Ate on {props.date} with {props.friend}.</h5>
           
            <h3 className="card-body">Location: {props.location}</h3>
            <h4 className="card-body">About this day: {props.memory}</h4>
        </div>
    )
} 

 