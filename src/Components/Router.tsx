import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from "../Pages/Landing";
import TicTac from "../Pages/ticTac";
import Game from "../Pages/theGame"
import Hooks from "../Pages/Hooks"

const RouteLogic = () => {
    return ( 
            <BrowserRouter >
                <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/hooks" element={<Hooks />} />
                        <Route path="/zero-one" element={<TicTac />} />
                        <Route path="/animations" element={<TicTac />} />
                        <Route path="/desert_rats_adventures" element={<Game />} />
                        <Route path="/interface_modules" element={<TicTac />} />
                        <Route path="/skater-up" element={<TicTac />} />
                </Routes>  
            </BrowserRouter>
    )
}

export default RouteLogic

