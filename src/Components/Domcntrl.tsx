import { useState } from "react";
import { useRef } from "react";
import "../Styles/Domcntrl.css"


const Domcntrl = () => {
    const [isCircle, setIsCircle] = useState(true);
    const nameInput = useRef(null);
    const li = document.querySelector('li');
    li?.addEventListener('click', () => {
        console.log("clicked the eventlistener!")
    });
    
            //nameInput.current.value = "";
            //<button onClick={() => nameInput.current.value =" "}>Clear the field.</button>

    return(
        <div className="holder">
            <div className={isCircle ? "circle" : "squarething"}></div>
            <button onClick={() => setIsCircle(!isCircle)}>Change the Shape</button>
                <div>
                    <input type="text" placeholder="Your text" ref={nameInput}></input>
                    
                    <ul>
                        <li>
                            helo click it (and check the console)
                        </li>
                    </ul>
                </div>
        </div>
       
    );
};

export default Domcntrl