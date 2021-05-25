function Memory(props) {
    return (
        <div  ><br/>
            <h3>{props.melon_name}</h3>
            <h5>Ate on {props.date} with {props.friend}.</h5>
           
            <h3>Location: {props.location}</h3>
            <h4>Detail: {props.memory}</h4>
            
        </div>
    )
} 