function Journal(props) {
    return (
        <div className="col-3" >
            <h2>{props.title}</h2>
            <h4>{props.rating}</h4>
            <h4>{props.entry}</h4>
        </div>
    )
}