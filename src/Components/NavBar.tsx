import "../Styles/NavBar.css"


function NavBar () {
    return (     
                <nav className="navbar">
                    <ul className="links">
                        <li>
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/hooks">Hooks</a>
                        </li>
                        <li>
                        <a href="/zero-one">Zero One</a>
                        </li>
                        <li>
                        <a href="/animations">Animations</a>
                        </li>
                        <li>
                        <a href="/desert_rats_adventures">DRat</a>
                        </li>
                        <li>
                        <a href="/interface_modules">UI Modules</a>
                        </li>
                    </ul>   
                </nav>
            )
}

export default NavBar