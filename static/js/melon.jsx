function Melon(props) {
    return (
        <div className=" card col-3" style={{" marginBottom":"10px"}} >

            <h6 className="card-header">{props.name}</h6>
            <div >
                <p className="card-body">{props.description}</p>
                <img className="card-footer img-fluid"src={props.img} width="100%" height="100px" />
            </div>
        </div>
    )
}