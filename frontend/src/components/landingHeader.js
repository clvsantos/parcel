import "antd/dist/antd.css";
import "./landingHeader.css";
import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Button, Image} from 'antd';

const { Header} = Layout;

function LandingHeader() {
    return (
        <Header className="header">
                <div className="leftAlign">
                    <Menu mode="horizontal" className="menuHeader">
                        <Menu.Item className="menuFont">
                            <a href ="/#top" className="colorBlue">
                                <Image preview={false} className="headerLogo" src={process.env.PUBLIC_URL+ '/PE-Logo-Header.png'}/>
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="rightAlign">
                    <Menu mode="horizontal" className="menuHeader">
                            
                            <Menu.Item className="menuFont">
                                <Link to="/tracking">
                                    <Button type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF" }}>TRACK YOUR PACKAGE</Button>
                                </Link>
                            </Menu.Item>
                    </Menu>
                </div>
        </Header>
    );
};

export default LandingHeader;