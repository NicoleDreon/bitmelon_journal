function MelonJournal(props) {

    const [allMelons, setAllMelons] = React.useState([]);
    const [clickedButtonId, setClickedButtonId] = React.useState('');

    React.useEffect(()=>{
        fetch('/allmelons.json')
        .then((response) => response.json())
        .then((data) => {
            console.log("test")
            setAllMelons(data);
            
        })
    }, [])

    const melonArray = [];
    for (const melon in allMelons) {
        melonArray.push(
        <MelonDrop name={allMelons[melon]['name']} />
        )
    }
    console.log(melonArray)

function MelonDrop(props) {
    return (
            <option>
              {props.name}
            </option>
    )
}
// need function for form, take 
// function createJournal(){
//     preventDefault();
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
            {/* need to compare to user */}
            <form  action="/melonJournal">
                <label>Title</label>
                <select name="melon_name" id="malon_name">
                {melonArray}</select>
                <label>Rating</label>
                <input type="text" name="rating" id="rating" /> 
                {/* onchange={evt=>{
                    setRating(evt.target.value)
                }} */}
                {/* need to figure out code for this compart to queentessa */}
                <label>Favorite</label>
                <input type="text" />
                <label>Flavor</label>
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
                <label>Image</label>
                <button>Button</button>
            </form>
           {/* <script>const getMelon {for(let melon of melonArray)}</script> */}
        </div>
    )
}