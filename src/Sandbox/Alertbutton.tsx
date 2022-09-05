

const callApp = () => {
    alert("this alert?")
}

export default function Alertbutton () {
        return(
            <div>
                <hr></hr>
                <p>This is an alert button.</p>
                <button onClick={callApp}>Popup an alert.</button>
            </div>   
        )    
}

