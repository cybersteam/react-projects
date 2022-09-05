import "../Styles/NavBar.css"
//import { Searchbar } from "./Dataview"

export default function NavBar(){
    return(
        <nav className="navbar">
            <div style={{color: "red", textAlign:"left"}}>
               
            </div>
            
            <div className="links">
                <a href="/home">Home</a>
                <a href="/about"> About</a>
                <a href="/contact">Contact</a>
                <a href="/faq">FAQ</a>
                <a href="/fun">Fun</a>
            </div>
            

        </nav>
    )


}
