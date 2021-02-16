import React, { Component, useState } from 'react'
import { Input, Tooltip, Button, Layout, Row, Col } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { render } from '@testing-library/react';
const { Header, Footer, Sider, Content } = Layout;

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    let onLoginChange = (e) => {
        setLogin(e.target.value)
    }
    let onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    let onClick = () => {
        history.push("/homepage");
    }

    return (
        <div className="Login">
            <Layout style={{

}}>
    <Header style={{
        top: "0%",
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
    }}>
        <HomeOutlined style={{
            paddingRight: "2100px",
        }}
        onClick={() => history.push("/")}
        />
      
    </Header>
    <Content style={{
        minHeight: "868px",
        paddingTop: "400px",
    }}>
        <Input
                placeholder="Enter your username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                    }
                onChange={onLoginChange}
            />
            <Input
                placeholder="Enter your password"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                    }
                onChange={onPasswordChange}
            />

            <Button 
                type="primary"
                onClick={onClick}
                >
                    Log In
            </Button>
    </Content>
    <Footer style={{

  
    }}>
        Copyright 2021 LeonelADiaz
    </Footer>
</Layout>
            

        </div>
    )

}



