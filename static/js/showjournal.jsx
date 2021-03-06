function ShowJournal(props){

    const {userInfo} = props
    const [allJournals, setAllJournals] = React.useState([]);

    function showJournals(evt) {
        evt.preventDefault()

        fetch('/showjournals.json', {
            method: 'POST',
            body: JSON.stringify({'email': userInfo.email }), 
            headers: {'Content-type': 'application/json'}
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("sent to route")
            setAllJournals(data);
            console.log("did not send to route 1")

        })
        console.log("did not send to route 2")
    }

    const journalDiv = [];
    for (const journal in allJournals) {
        // updateDetails is the callback function we'll use when the button is clicked
        journalDiv.push(
            // Give each button a unique key so that React can identify it.
            
            <Journal journal={journal} title={allJournals[journal]['title']} rating= {allJournals[journal]['rating']} entry = {allJournals[journal]['entry']} img={allJournals[journal]['img']} favorite={allJournals[journal]['favorite']}/>
        )
    }

    return(
        <div>
            <form  onSubmit={(evt)=> {showJournals(evt)}}>
                <button id="journalShow" class="btn btn-primary active">View Melon Journal Entries</button>
            </form>
            
            <div className="row">
                {journalDiv}
            </div>

        </div>
    )

} 