import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import React from 'react';
import AboutPage from "../components/AboutPage";
import Home from '../components/HomePage';
import Navbar from "../components/Navbar";

const AppRouters =()=>(
    <Router>
    <div>
    <Navbar/>
    
    
    <Switch>
    <Route path="/" component={Home} exact ={true}/>
    <Route path="/info/:optionsid" component={AboutPage}/>
    </Switch>
   
   
    </div>
    </Router>
);
export default AppRouters;