
import './App.css';
import Main from "./container/Main";
import Home from "./container/Home";
import Skills from "./container/Skills";
import Education from "./container/Education";
import Works from "./container/Works";
import Projects from "./container/Projects";
import Achieve from "./container/Achieve";
import Contact from "./container/Contact";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>

                <Route exact path={'/My-Portfolio'} element={<Main/> }/>
                <Route exact path={'/My-Portfolio/home'} element={<Home/>}/>
                <Route exact path={'/My-Portfolio/skills'} element={<Skills/>}/>
                <Route exact path={'/My-Portfolio/education'} element={<Education/>}/>
                <Route exact path={'/My-Portfolio/works'} element={<Works/>}/>
                <Route exact path={'/My-Portfolio/projects'} element={<Projects/>}/>
                <Route exact path={'/My-Portfolio/achieve'} element={<Achieve/>}/>
                <Route exact path={'/My-Portfolio/contact'} element={<Contact/>}/>
            </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
