function Melon(props) {
    return (
        <div className="col-3" >
            <h6>{props.name}</h6>
            <h6>{props.description}</h6>
            <img src={props.img} width="100%" height="20%"  />
        </div>
    )
}