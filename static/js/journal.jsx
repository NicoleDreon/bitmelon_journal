function Journal(props) {

    let fav_word = ""
    
    if (props.favorite == true) {
        fav_word = "Yes"
    } else if (props.favorite == false) {
        fav_word = "No"
    }


    return (
        <div className="card col-3" style={{" marginBottom":"10px"}}>
            <h3 id="journal-header" className="card-header">{props.title}</h3>
            <h4 className="card-body">Rating: {props.rating}</h4>
            <h4 className="card-body">Tasting Notes: {props.entry}</h4>
            <h4 className="card-body">Favorite: {fav_word}</h4>
            <img id="journal-img" className="card-footer img-fluid" src={props.img}  width="100%" height="50%"/>
        </div>
    ) 
}