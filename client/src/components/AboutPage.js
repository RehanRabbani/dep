import React from 'react'
import axios from 'axios';
class AboutPage extends React.Component{
    constructor(){
        super();
        this.state ={
            description: []
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/info/${this.props.match.params.optionsid}`)
        .then(res => {
          const desc = res.data;
          this.setState({ description: desc})
          console.log(res.data)}
          )
      }


    render(){
       
        return(
            <div className="AboutPageStyle">
            
          <div className="AboutOne">
          <h1> {this.state.description.name}</h1>
          <p> {this.state.description.symbol}</p>
          <p> {this.state.description.cmc_rank}</p>
          </div>
          <div className="PAboutTwo">
          
          <div className="AboutTwo">
          <p>slug</p>
          <p>circulating_supply</p>
          <p>total_supply</p>
          <p>max_supply</p>
          <p>num_market_pairs</p>
          </div>
          <div className="AboutTwo">
          <p> {this.state.description.slug}</p>
          <p> {this.state.description.circulating_supply}</p>
          <p> {this.state.description.total_supply}</p>
          <p> {this.state.description.max_supply}</p>
          <p> {this.state.description. num_market_pairs}</p>
          </div>
          </div>
          
            
           
            </div>
        )
    }
}
export default AboutPage