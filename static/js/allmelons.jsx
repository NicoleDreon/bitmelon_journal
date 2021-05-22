function AllMelons(props){

    const [allMelons, setAllMelons] = React.useState([]);
    //const [clickedButtonId, setClickedButtonId] = React.useState('');

    React.useEffect(()=>{
        fetch('/allmelons.json')
        .then((response) => response.json())
        .then((data) => {
            setAllMelons(data);
            
        })
    }, [])

    const melonDiv = [];
    for (const melon in allMelons) {
        // updateDetails is the callback function we'll use when the button is clicked
        melonDiv.push(
            // Give each button a unique key so that React can identify it.
            
            <Melon melon={melon} name={allMelons[melon]['name']} description= {allMelons[melon]['description']} img = {allMelons[melon]['url']} />
        )
    }

    return(
        <div>
            {melonDiv}
        </div>
    )

}