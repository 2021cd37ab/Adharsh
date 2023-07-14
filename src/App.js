import React from 'react';
import {BrowserRouter as Router, Switch,Route, Routes} from 'react-router-dom';
import GatePass from "./pages/GatePass/GatePass";
import GatePass1 from './pages/GatePass/1';
import GatePass2 from './pages/GatePass/2';
import GatePass2_1 from './pages/GatePass/2(1)';
import GatePass2_2 from './pages/GatePass/2(2)';
import GatePass3 from './pages/GatePass/3';
import GatePass3_1 from './pages/GatePass/3(1)';
import GatePass4 from './pages/GatePass/4';
import GatePass4_1 from './pages/GatePass/4(1)';
import GatePass4_2 from './pages/GatePass/4(2)';

import Screen2 from './pages/Screen/screen2';
import Screen4 from './pages/Screen/screen4';
import Screen6 from './pages/Screen/screen6';
import Screen8 from './pages/Screen/screen8';
import Screen10 from './pages/Screen/screen10';
import Screen12 from './pages/Screen/screen12';


function App(){
    return (
        <Router>
            <switch>
            <Routes>
            <Route path="/" element={<Screen2 />} />
                <Route  path='/screen2' Component={Screen2} />

                <Route path='/screen4' Component={Screen4} />
                <Route path="/screen6" Component={Screen6 } />
        <Route path="/screen8" Component={Screen8} />
        <Route path='/screen10' Component={Screen10} />
        <Route path='/screen12' Component={Screen12} />
        
        {/* <Route path='/' element={<GatePass />} />
        <Route path='/1' Component={GatePass1} />
        <Route path='/2' Component={GatePass2} />
        <Route path='/2(1)' Component={GatePass2_1} />
        <Route path='/2(2)' Component={GatePass2_2} />
        <Route path='/3' Component={GatePass3} />
        <Route path='/3(1)' Component={GatePass3_1} />
        <Route path='/4' Component={GatePass4} />
        <Route path='/4(1)' Component={GatePass4_1} />
        <Route path='/4(2)' Component={GatePass4_2} /> */}



                </Routes>
            </switch>
        </Router>
        
    );
}

export default App;