function Journal(props) {
    return (
        <div className="col-6" >
            <h2>{props.title}</h2>
            <h4>{props.rating}</h4>
            <h4>{props.entry}</h4>
            <h4>Favorite{props.favorite}</h4>
            <img src={props.img}  width="100%" height="50%"/>
        </div>
    )
}