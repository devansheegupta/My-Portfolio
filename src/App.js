
import './App.css';
import 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';
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

                <Route exact path={'/'} element={<Main/> }/>
                <Route exact path={'/home'} element={<Home/>}/>
                <Route exact path={'/skills'} element={<Skills/>}/>
                <Route exact path={'/education'} element={<Education/>}/>
                <Route exact path={'/works'} element={<Works/>}/>
                <Route exact path={'/projects'} element={<Projects/>}/>
                <Route exact path={'/achieve'} element={<Achieve/>}/>
                <Route exact path={'/contact'} element={<Contact/>}/>
            </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
