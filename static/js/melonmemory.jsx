function MelonMemory(props) {

    const [journal, setJournal] = React.useState('');
    const [journal_id, setJournal_id] = React.useState('');
    const [journalDropdownComponent,setJournalDropdownComponent] = React.useState(false)
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
            setJournalDropdownComponent(true);
            console.log(journalDropdownComponent);

        })
        console.log("did not send to route 2")
    }
    

    

    return (
        
<div>
            {/* no action */}
            {/* <header>Memory</header>
            <h2>Memories for {userInfo.user_name}</h2> */}
            {/* need to compare to user */}
            <form  onSubmit={(evt)=> {journalDropdown(evt)}}>
                <button id="createMemory" class="btn btn-primary active"> Create Memory</button>
            </form>
            { journalDropdownComponent ? <FormMemory journal_id={journal_id} journal={journal} email={userInfo.email}  />:null }
           
        </div>
    )
}

function FormMemory(props){
  
    const [location, setLocation] = React.useState('');
    const [memory, setMemory] = React.useState('');
    const [date, setDate] = React.useState('');
    const [friend, setFriend] = React.useState('');
    const [journal_id, setJournal_id] = React.useState('');
    

    const journalArray = [];
    const journal= props.journal
    for (const j in journal) {
    //    let i = 0
    //     const name = 'name'+i
        console.log(journal[j]['title'])
        journalArray.push(
            
        <MemoryDrop name={journal[j]['title']} id={journal[j]['id']} /> 
        )
    }
    console.log(journalArray)

    function MemoryDrop(props) {
        return (
            <option key= {props.id} value={props.id} id = {props.id}>
                {props.name}
            </option>
        )
    }

    function createMemory(evt){
        evt.preventDefault();
        

        fetch('/memory.json', {
            method: 'POST',
            body: JSON.stringify({'journal': journal, 'journal_id': journal_id, 'location': location, 'memory': memory, 'date':date, 'friend':friend, 'email': props.email }), 
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
        <form  onSubmit={(evt)=> {createMemory(evt)}}>
        <div class="form-group">
            <label>Select a Melon that has a Journal</label>
            {/* must be a melon that already has a journal entry */}
            <select class="form-control" name="journal_name" id="journal_name" value={journal_id} onChange={ evt=>{
                setJournal_id(evt.target.value)
            }}>
            <option></option>
            {journalArray} 
            {/* how can we change this array so that it only shows melons that only have journal entries? */}
            </select>
        </div>
        <div class="form-group">
            <label>Location</label>
                <input class="form-control" type="text" name="location" id="location" onChange={ evt=>{
                    setLocation(evt.target.value)
                }}/>
        </div>
        <div class="form-group">
            <label>Memory</label>
            <textarea class="form-control" name="memory" id="memory" onChange={ evt=>{
                setMemory(evt.target.value)
            }}/> 
        </div>
        <div class="form-group">
            <label>Date</label>
            <input class="form-control" type="date" name="date" id="date" onChange={ evt=>{
                setDate(evt.target.value)
            }}>
            </input>
        </div>
        <div class="form-group">
            <label>Friend</label>
            <input class="form-control" type="text" name="friend" id="friend" onChange={ evt=>{
                setFriend(evt.target.value)
            }}>
            </input>
        </div>
        <button id="memorySubmit" type="submit" class="btn btn-primary active">Submit Memory</button>
        </form>
    )
} 

