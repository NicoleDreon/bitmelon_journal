function MelonJournal(props) {

    const [allMelons, setAllMelons] = React.useState([]);
    const [melon_name, setMelonName] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [entry, setEntry] = React.useState('');
    const [favorite, setFavorite] = React.useState('');
    const {userInfo} = props
    
    // const [clickedButtonId, setClickedButtonId] = React.useState('');

    React.useEffect(()=>{
        fetch('/allmelons.json')
        .then((response) => response.json())
        .then((data) => {
            // console.log("test")
            setAllMelons(data);
            
        })
    }, [])

    const melonArray = [];
    for (const melon in allMelons) {
    //    let i = 0
    //     const name = 'name'+i
        melonArray.push(
        // console.log(name)    
        <MelonDrop name={allMelons[melon]['name']} />
        
        )
    }
    // console.log(melonArray)

    function MelonDrop(props) {
        return (
            <option key= {props.name} value={props.name} id = {props.name}>
                {props.name}
            </option>
        )
    }

    function createJournal(evt){
        evt.preventDefault();
        // console.log(evt);

        fetch('/journal.json', {
            method: 'POST',
            body: JSON.stringify({'melon_name': melon_name, 'rating': rating, 'entry':entry, 'favorite':favorite, 'email': userInfo.email }), 
            headers: {'Content-type': 'application/json'}
        })
        .then((response)=> response.json())
        .then((data) => {
            setMelonName(data.title);
            setRating(data.rating);
            setEntry(data.entry);
            setFavorite(data.favorite);
            // console.log();
        })
    }
    
        // console.log()
        // do fetch request here for users inputs
        // }using fetch request to send info to server to have access

        // deconstruct props
        // is logged in state should be in app parent so other components 
        // can use that state

        // need onclick on button/onsubmit on form not action 
        // we need to grab information from user as props.setUserInfo
        // does our state for journal entry need to be available for any children components?
        // like Memory
        // when we get information from form on server need to useCallback
        // request.json.get not form

    return (
        
        <div>
            {/* no action */}
            <header>Journal</header>
            <h2>Melons for {userInfo.user_name}</h2>
            {/* need to compare to user */}
            <form  onSubmit={(evt)=> {createJournal(evt)}}>
                <label>Title</label>
                <select name="melon_name" id="melon_name" value={melon_name} onChange={ evt=>{
                    setMelonName(evt.target.value)
                }}>
                <option></option>
                {melonArray}
                </select>
                <label>Rating</label>
                <input type="text" name="rating" id="rating" onChange={ evt=>{
                    setRating(evt.target.value)
                }}/> 
                <label>Tasting Notes</label>
                <textarea name="entry" id="entry" onChange={ evt=>{
                    setEntry(evt.target.value)
                }}>
                </textarea>
                <label>Favorite</label>
                <select name="favorite" id="favorite" required onChange={ evt=>{
                    setFavorite(evt.target.value)
                }}>
                <option></option>
                <option value='True'>Yes</option>
                <option value='False'>No</option>
                </select>
                <button type="submit">Create Entry</button>
            </form>
        </div>
    )
}