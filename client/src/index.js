import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/HomePage.js';
import AppRouters from './routers/AppRouters'
import './index.css';

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
class ParentComponent extends React.Component{
    render(){
        return(
            <div>
            <Home/>
          
            </div>
        );
    }
}
ReactDOM.render(<AppRouters />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
