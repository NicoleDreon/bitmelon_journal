function MelonJournal(props) {

    const [melons, setMelons] = React.useState([]);

    React.useEffect(()=>{
    fetch('/melons.json')
    .then((response) => response.json())
    .then((data) => {
    setMelons(data);
    // console.log(data);
    console.log(setMelons);      
     })
    }, [])
     console.log(melons); 

    const test = melons
    const melon_names = test.map((test)=>
        <li>{melon_names}</li>);
        console.log(melon_names); 

    return (
        
        <div>
            <header>Journal</header>
            <form action="/melonJournal">
                <label>Title</label>
                <select name="title" id="title">
                    {/* {{for melon of melons}} */}
                    <option id="melon_names" >   
                    </option>
                </select>
                <label>Rating</label>
                <input type="text" name="rating" id="rating" />
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
           
        </div>
    )
}