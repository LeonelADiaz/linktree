import React, { Component }  from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Image } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Homepage from './components/dashboard/Homepage'
import Login from './components/accounts/Login'
import './App.css';
import portrait from './assests/Portrait.jpg'
import fbLogo from './assests/Facebook-logo.png'


const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/homepage' component={Homepage}></Route>
            <Route path='/signup' component={Dashboard}></Route>
            <Route path='/signin' component={Dashboard}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;