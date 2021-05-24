function Memory(props) {
    return (
        <div className="col-3" >
            <h1>Here are your memories!</h1>
            <h2>{props.location}</h2>
            <h4>{props.memory}</h4>
            <h4>{props.date}</h4>
        </div>
    )
}