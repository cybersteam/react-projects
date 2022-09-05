

const callApp = () => {
    alert("this alert?")
}

//var props = { x: 1, y: 2, z: 3};

export default function Alertbutton () {
        return(
            <div>
                <hr></hr>
                <p>This is an alert button.</p>
                <button onClick={ callApp }>Popup an alert.</button>
            </div>   
        )    
}

