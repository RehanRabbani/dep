import React from 'react';
import {Link} from 'react-router-dom';
class Navbar extends React.Component{
    render()
    {
        return(
            <div className="myNavbar">
            <Link to="#" className="toggle" id="one">
                    <i className="fas fa-bars"></i>
                </Link>
               
            <Link to="#" className="brand">myname
                    <span className="size"> <i className="fas fa-horse-head"></i></span>
            </Link>
        
       
        <div className="left">
            <Link to="#" className="link">Home</Link>
            <Link to="" className="link">Features</Link>
            <Link to="" className="link">Solutions</Link>
            <Link to="" className="link">Pricing</Link>
            <Link to="" className="link">Demo</Link>
            <Link to="" className="link">Help</Link>
            <Link to="" className="link">Contact</Link>
        </div>
    
        <div className="right">
            <Link to="" className="link">Register</Link>
            <Link to="" className="link">LogIn</Link>
            
        </div>
    </div>
        )
    }

}
export default Navbar;