function Journal(props) {

    let fav_word = ""
    
    if (props.favorite == true) {
        fav_word = "Yes"
    } else if (props.favorite == false) {
        fav_word = "No"
    }


    return (
        <div className="col-6" >

            <h2>{props.title}</h2>
            <h4>Rating: {props.rating}</h4>
            <h4>Tasting Notes: {props.entry}</h4>
            <h4>Favorite: {fav_word}</h4>
            <img src={props.img}  width="100%" height="50%"/>
        </div>
    )
}