function ShowMemory(props){

    const {userInfo} = props
    const [allMemories, setAllMemories] = React.useState([]);

    function showMemories(evt) {
        evt.preventDefault()

        fetch('/showmemories.json', {
            method: 'POST',
            body: JSON.stringify({'user_id': userInfo.user_id }), 
            headers: {'Content-type': 'application/json'}
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("sent to route")
            setAllMemories(data);
            console.log("did not send to route 1")

        })
        console.log("did not send to route 2")
    }

    const memoryDiv = [];
    for (const memory in allMemories) {
        // updateDetails is the callback function we'll use when the button is clicked
        memoryDiv.push(
            // Give each button a unique key so that React can identify it.
            
            <Memory memory={memory} melon_name={allMemories[memory]['name']} location={allMemories[memory]['location']} memory= {allMemories[memory]['memory']} date = {allMemories[memory]['date']} friend={allMemories[memory]['friend']} />
        )
    }
 
    return(
        <div>
            <form  onSubmit={(evt)=> {showMemories(evt)}}>
                <button id="memoryShow" class="btn btn-primary active">See Memories</button>
            </form>
            <div className="row">
                {memoryDiv}
            </div>

        </div>
    )

} 