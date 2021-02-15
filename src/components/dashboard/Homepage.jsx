import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Image } from 'antd';
import './../../App.css';
import portrait from './../../assests/Portrait.jpg'
import fbLogo from './../../assests/Facebook-logo.png'
const { Header, Content, Footer } = Layout;

const App = () => {
    return (
      <div className="App">
        <Row>
          <Col span={24}>
            <img src={portrait} alt="Logo" width="128px" height="128px"/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p>@LeonelADiaz</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <img src={fbLogo} alt="Facebook Logo" width="50px" height="50px"/>
          </Col>
          <Col span={12}>
            <p>Facebook</p>
          </Col>
        </Row>
      </div>
    );
  
}

export default App;