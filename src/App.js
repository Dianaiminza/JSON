
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import{Switch,Route,}from 'react-router-dom';
import NoMatch  from './pages/404Page';
import React, { Component } from 'react';
import SignUp from './pages/SignUp'
import CatsList from './component/CatsList';
import UpdateCat from './component/UpdateCat';
 export default class App extends Component {
  state={
  isLog:false
 }
 handleLogin=(isLog)=>this.setState({isLog})
 render() {
const {isLog}=this.state;


  
        return (
          <div>
          
          <Switch>
          
        
          <Route  path="/login" component={LogIn} /> 
          {
              !isLog ?
              <Route exact path='/' render={() => <LogIn isLogin={this.handleLogin}/>}/>
                :
              <Route path='/home' render={() => <Home handleLogged={this.handleLogin}/> }/>
            } 
         
        <Route  path="/signup" component={SignUp} />
        <Route path="/home" component={Home}/>
        <Route path="/cats" component={CatsList} exact />
         <Route exact path="/cats/:id/edit" component={UpdateCat} />
         <Route component={NoMatch} />
          </Switch>
        </div>
        );
       
    }
};

