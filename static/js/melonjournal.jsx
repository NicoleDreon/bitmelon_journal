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
                <option>
                {props.name}
                </option>
        )
    }

    function createJournal(evt){
        evt.preventDefault();
        // console.log(evt);

        fetch('/journal.json', {
            method: 'POST',
            body: JSON.stringify({'melon_name': melon_name, 'rating': rating, 'entry':entry, 'favorite':favorite }), 
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
                <select name="melon_name" id="melon_name" onChange={ evt=>{
                    setMelonName(evt.target.value)
                }}>
                <option></option>
                <option>Honeydew</option>
                {/* {melonArray} */}
                </select>
                <label>Rating</label>
                <input type="text" name="rating" id="rating" onChange={ evt=>{
                    setRating(evt.target.value)
                }}/> 
                <label>Entry</label>
                <input type="text" name="entry" id="entry" onChange={ evt=>{
                    setEntry(evt.target.value)
                }}>
                </input>
                <label>Favorite</label>
                <select name="favorite" id="favorite" onChange={ evt=>{
                    setFavorite(evt.target.value)
                }}>
                <option value='True'>Yes</option>
                <option value='False'>No</option>
                </select>
                {/* should favorite be a yes/no (true or false) */}
                {/* <label>Flavor</label>
                    <ul>
                        <h6>Sour</h6>
                        <label name="sour">1</label>
                        <input type="radio" name="sour" id="1"/>
                        <label name="sour">2</label>
                        <input type="radio" name="sour" id="2"/>
                        <label name="sour">3</label>
                        <input type="radio" name="sour" id="3"/>
                        <label name="sour">4</label>
                        <input type="radio" name="sour" id="4"/>
                        <label name="sour">5</label>
                        <input type="radio" name="sour" id="5"/>
                    </ul>
                    <ul>
                        <h6>Sweet</h6>
                        <label name="sweet">1</label>
                        <input type="radio" name="sweet" id="1"/>
                        <label name="sweet">2</label>
                        <input type="radio" name="sweet" id="2"/>
                        <label name="sweet">3</label>
                        <input type="radio" name="sweet" id="3"/>
                        <label name="sweet">4</label>
                        <input type="radio" name="sweet" id="4"/>
                        <label name="sweet">5</label>
                        <input type="radio" name="sweet" id="5"/>
                    </ul>
                    <ul>
                        <h6>Bitter</h6>
                        <label name="bitter">1</label>
                        <input type="radio" name="bitter" id="1"/>
                        <label name="bitter">2</label>
                        <input type="radio" name="bitter" id="2"/>
                        <label name="bitter">3</label>
                        <input type="radio" name="bitter" id="3"/>
                        <label name="bitter">4</label>
                        <input type="radio" name="bitter" id="4"/>
                        <label name="bitter">5</label>
                        <input type="radio" name="bitter" id="5"/>
                    </ul>
                    <ul>
                        <h6>Salty</h6>
                        <label name="salty">1</label>
                        <input type="radio" name="salty" id="1"/>
                        <label name="salty">2</label>
                        <input type="radio" name="salty" id="2"/>
                        <label name="salty">3</label>
                        <input type="radio" name="salty" id="3"/>
                        <label name="salty">4</label>
                        <input type="radio" name="salty" id="4"/>
                        <label name="salty">5</label>
                        <input type="radio" name="salty" id="5"/>
                    </ul>
                    <ul>
                        <h6>Savory</h6>
                        <label name="savory">1</label>
                        <input type="radio" name="savory" id="1"/>
                        <label name="savory">2</label>
                        <input type="radio" name="savory" id="2"/>
                        <label name="savory">3</label>
                        <input type="radio" name="savory" id="3"/>
                        <label name="savory">4</label>
                        <input type="radio" name="savory" id="4"/>
                        <label name="savory">5</label>
                        <input type="radio" name="savory" id="5"/>
                    </ul>
                <label>Image</label> */}
                <button type="submit">Create Entry</button>
            </form>
        </div>
    )
}