import React, { Component } from 'react';
import { Layout, Row, Col, Button} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import portrait from './../../assests/Portrait.jpg';
import { Link } from 'react-router-dom';
import './../../App.css';
import firebase from "firebase";

const { Header, Footer, Sider, Content } = Layout;


export default function Dashboard() {
        const firebaseApp = firebase.apps[0];
        return (
            <Layout style={{

            }}>
                <Header style={{
                    top: "0%",
                    position: "fixed",
                    width: "100%",
                    backgroundColor: "white",
                }}>
                    
                </Header>
                <Content style={{
                    minHeight: "868px",
                    paddingTop: "400px",
                }}>
                    {/*<Row>
                        <Col span={12}>col</Col>
                        <Col span={12}>col</Col>
                    </Row>*/}
                    <h1 style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}>One link. All the links.</h1>
                    <Button type="primary">Sign Up!</Button>
                    <h4>
                        Already have an account?
                        <Link to="/login"> Sign In</Link>
                    </h4>
                </Content>
                <Footer style={{
         
              
                }}>
                    Copyright 2021 LeonelADiaz
                </Footer>
            </Layout>
        )
    

}
