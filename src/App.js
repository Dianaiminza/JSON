
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddCat from './component/AddCat.js';
import UpdateCat from './component/UpdateCat.js';
import CatsList from './component/CatsList.js';
import Cat from    './component/Cat.js';
import{Link,Switch,Route}from 'react-router-dom';

import React, { Component } from 'react';
class App extends Component {
 

componentDidMount() {
 }
   render() {
   
        return (
           
            <div className="App">  
       
           <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href={"/cats"} className="navbar-brand">
            Cat
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/cats"} className="nav-link">
                Cats
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            

          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/cats" component={CatsList} />
            <Route exact path="/add" component={AddCat} />
            <Route exact path="/cats/:id/edit" component={UpdateCat} />
            <Route path="/cats/:id" component={Cat}/>
          </Switch>
        </div>
        </div>
        );
    }
}
export default App;