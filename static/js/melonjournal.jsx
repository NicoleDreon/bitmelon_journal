function MelonJournal(props) {

    const [allMelons, setAllMelons] = React.useState([]);
    
    const {userInfo} = props
    const [journalDropdownComponent,setJournalDropdownComponent] = React.useState(false)



    function journalDropdown(evt) {
        evt.preventDefault()
        fetch('/allmelons.json')
        .then((response) => response.json())
        .then((data) => {
        // console.log("test")
        setAllMelons(data);
        setJournalDropdownComponent(true)
        console.log(allMelons)
                
        })
        
    }


    return (
        
        <div>
            {/* no action */}
            <header></header>
            {/* <h2>Melons for {userInfo.user_name}</h2> */}
            {/* need to compare to user */}
            <form  onSubmit={(evt)=> {journalDropdown(evt)}}>
                <button id="createJournal" class="btn btn-primary active">Create Journal</button>
            </form>
            { journalDropdownComponent ? <JournalForm allMelons={allMelons} email={userInfo.email}  />:null}

        </div>
    )
}


function JournalForm(props){

    const [melon_name, setMelonName] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [entry, setEntry] = React.useState('');
    const [favorite, setFavorite] = React.useState('');
    const allMelons= props.allMelons
    
    
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
            body: JSON.stringify({'melon_name': melon_name, 'rating': rating, 'entry':entry, 'favorite':favorite, 'email': props.email }), 
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

    return(
        <div>
            <form onSubmit={(evt)=> {createJournal(evt)}}>
                    <div class="form-group">
                        <label>Select Melon</label>
                        <select class="form-control" name="melon_name" id="melon_name" value={melon_name} onChange={ evt=>{
                            setMelonName(evt.target.value)
                        }}>
                        <option></option>
                        {melonArray}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Rating</label>
                        <input class="form-control" type="text" name="rating" id="rating" onChange={ evt=>{
                            setRating(evt.target.value)
                        }}/>
                    </div> 
                    <div class="form-group">
                        <label>Tasting Notes</label>
                        <textarea class="form-control" name="entry" id="entry" onChange={ evt=>{
                            setEntry(evt.target.value)
                        }}>
                        </textarea>
                    </div>
                    <div class="form-group">
                        <label>Favorite</label>
                        <select class="form-control" name="favorite" id="favorite" required onChange={ evt=>{
                            setFavorite(evt.target.value)
                        }}>
                        <option></option>
                        <option value='True'>Yes</option>
                        <option value='False'>No</option>
                        </select>
                    </div>
                    <button id="journalSubmit" type="submit" class="btn btn-primary active">Submit Journal</button>
                </form>
        </div>
    )
} 