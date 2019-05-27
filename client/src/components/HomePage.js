import React from 'react';
// import ReactDOM from 'react-dom';
//import './Navbar.js';
// import Navbar from './Navbar.js';
// import Footer from './Footer.js'
import axios from 'axios';
import { Link } from "react-router-dom";

import AboutPage from './AboutPage.js';



class Home extends React.Component{
    constructor(){
        super();
        this.state={
            array:[],
            currencydesc: []
        }
    }
    componentWillMount()
    {
      axios.get('http://localhost:5000/info/getinfo').then(res =>{
          this.setState({array:res.data})
          console.log(res.data);
      })
    }
    getdescription(obj,id){
        let {currencydesc} = this.state;
        currencydesc.push(obj);
         this.setState({ currencydesc})
       console.log(currencydesc);
      }
   

    render()
    {
        return(
           
            <table className="display-comtrol">
                <tr className="sub-child-one">
                <th>Name</th>
                <th>cmc_rank</th>
                <th>Symbol</th>
                <th>Slug</th>
                <th>circulating_supply</th>

           
            
            
            <th>total_supply</th>
            <th> max_supply</th>
           
            
                </tr>
            {this.state.array.map(options =>{
                return(
                    
                 
                    
                  <tr className="sub-child-two">
                        
                 <Link to={`/info/${options._id}`} onClick={ ()=>this.getdescription(options)} params={this.state.currencydesc}> {options.name}</Link>
                   
                 
                  <td >{options.cmc_rank}</td>
                  <td >{options.symbol}</td>
                  <td >{options.slug}</td>
                  <td >{options.circulating_supply}</td>
                  
                
                
                  <td >{options.total_supply}</td>
                  <td >{options.max_supply}</td>
                 

             </tr>
             
                )
              
                   
            }
        )
    }
           
            </table>
            
            
        )
    }
}
export default Home
// <Footer/>

// <li key={options}>{options.circulating_supply}</li>