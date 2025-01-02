import Home from './Home' 
import Login from "./Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}