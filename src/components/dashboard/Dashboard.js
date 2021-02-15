import React, { Component } from 'react';
import { Layout } from 'antd';
import portrait from './../../assests/Portrait.jpg'

const { Header, Footer, Sider, Content } = Layout;

class Dashboard extends Component {

    render() {
        return (
            <Layout style={{
                minHeight: "100%",
                position: "relative",
            }}>
                <Header style={{
                    top: "0%",
                    position: "fixed",
                    width: "100%",
                }}>
                    Header
                </Header>
                <Content style={{
                    paddingBottom: "100px",
                }}>
                    <img src={portrait} alt="Portrait" height="100px" width="100px" ></img>

                </Content>
                <Footer style={{
                    bottom: "-363%",
                    width: "100%",
                    position: "absolute",
              
                }}>
                    Footer
                </Footer>
            </Layout>
        )
    }

}

export default Dashboard;