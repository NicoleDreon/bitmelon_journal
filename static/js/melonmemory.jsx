// function MelonMemory(props) {
//     return (
//         <div>
//             <header>Memory</header>
//             <form action="/melonMemory">
//                 <label>Location</label>
//                 <input type="text" name="location" id="location"/>
//                 <label>Memory</label>
//                 <input type="text" name="melon-memory" id="melon-memory" />
//                 <label>Date</label>
//                 <input type="date" />
//                 <label>Friend</label>
//                 <input type="text" />
//                 <label>Image</label>
//                 <button>Button</button>
//             </form>
//         </div>
//     )
// }

function MelonMemory(props) {

    const [melon_name, setMelonName] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [memory, setMemory] = React.useState('');
    const [date, setDate] = React.useState('');
    const [friend, setFriend] = React.useState('');
    const [journal, setJournal] = React.useState('');
    const [journal_id, setJournal_id] = React.useState('');
    const {userInfo} = props
    
    
    function journalDropdown(evt) {
        evt.preventDefault()

        fetch('/showjournals.json', {
            method: 'POST',
            body: JSON.stringify({'email': userInfo.email }), 
            headers: {'Content-type': 'application/json'}
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("sent to route")
            setJournal(data);
            console.log(Journal)

        })
        console.log("did not send to route 2")
    }

    

    const journalArray = [];
    for (const j in journal) {
    //    let i = 0
    //     const name = 'name'+i
        console.log(journal[j]['title'])
        journalArray.push(
            
        <MemoryDrop name={journal[j]['title']} id={journal[j]['journal_id']} /> 
        )
    }
    console.log(journalArray)

    function MemoryDrop(props) {
        return (
            <option key= {props.name} value={props.name} id = {props.id}>
                {props.name}
            </option>
        )
    }

    function createMemory(evt){
        evt.preventDefault();
        // console.log(evt);

        fetch('/memory.json', {
            method: 'POST',
            body: JSON.stringify({'journal': journal, 'journal_id': journal_id, 'location': location, 'memory': memory, 'date':date, 'friend':friend, 'email': userInfo.email }), 
            headers: {'Content-type': 'application/json'}
        })
        .then((response)=> response.json())
        .then((data) => {
            setLocation(data.location);
            setMemory(data.memory);
            setDate(data.date);
            setFriend(data.friend);
            setJournal_id(data.journal_id);
            // console.log();
        })
    }

    return (
        
        <div>
            {/* no action */}
            <header>Memory</header>
            <h2>Memories for {userInfo.user_name}</h2>
            {/* need to compare to user */}
            <form  onSubmit={(evt)=> {journalDropdown(evt)}}>
                <button>Activate Dropdown</button>
            </form>
            <form  onSubmit={(evt)=> {createMemory(evt)}}>
                <label>Select a Melon that has a Journal</label>
                {/* must be a melon that already has a journal entry */}
                <select name="journal_name" id="journal_name" value={journal_id} onChange={ evt=>{
                    setJournal_id(evt.target.value)
                }}>
                <option></option>
                {journalArray} 
                {/* how can we change this array so that it only shows melons that only have journal entries? */}
                </select>
                <label>Location</label>
                <input type="text" name="location" id="location" onChange={ evt=>{
                    setLocation(evt.target.value)
                }}/>
                <label>Memory</label>
                <input type="text" name="memory" id="memory" onChange={ evt=>{
                    setMemory(evt.target.value)
                }}/> 
                <label>Date</label>
                <input type="date" name="date" id="date" onChange={ evt=>{
                    setDate(evt.target.value)
                }}>
                </input>
                <label>Friend</label>
                <input type="text" name="friend" id="friend" onChange={ evt=>{
                    setFriend(evt.target.value)
                }}>
                </input>
                <button type="submit">Create Memory</button>
            </form>
        </div>
    )
}