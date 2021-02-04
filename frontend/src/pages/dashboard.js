import "antd/dist/antd.css";
import "./dashboard.css";
import React from 'react';
import Weather from '../components/weather';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import "../api/deliveryHandler";

const { Header,Content } = Layout;

function Dashboard({isLoggedIn}){

    return ( 
        <div>

                <div className="dashboardheader">
                    <div className="normal">Welcome Back,</div>
                    <div className="bold">{isLoggedIn.name}</div>
                </div>
                
                <div className="opaque">
                    <div className="dashboardcontainer">
                        <Weather></Weather>
                    </div>
                </div>
                
                <div className="dashboardcontainer">
                    <Row>
                        <Col span={6}>
                            <Row><div className="piechart"></div></Row>
                            <Row><div className="centered">Legend</div></Row>
                            <Row><Col span={12}>Successful Delivery</Col><Col span={12}>Failed Delivery</Col></Row>
                            <Row><Col span={12}>Pending Delivery</Col><Col span={12}></Col></Row>
                        </Col>
                        <Col span={18}>
                            <Row>
                            <div className="bodyheader">Account Summary</div>
                            </Row>
                            <Row>
                            <Col span={6}><div className="stats"><div className="valuetd statnum"><TotalDeliveries></TotalDeliveries></div><br></br>Total Deliveries</div></Col>
                            <Col span={6}><div className="stats"><div className="valuesd statnum"><SuccessfulDeliveries></SuccessfulDeliveries></div><br></br>Successful Deliveries</div></Col>
                            <Col span={6}><div className="stats"><div className="valuepd statnum"><PendingDeliveries></PendingDeliveries></div><br></br>Pending Deliveries</div></Col>
                            <Col span={6}><div className="stats"><div className="valuefd statnum"><FailedDeliveries></FailedDeliveries></div><br></br>Failed Deliveries</div></Col>
                            </Row>
                            <Row>
                            <div className="bodyheader">Delivery Trends</div>
                            </Row>
                            <Row>
                            <Col span={24}><div className="statsgraph">graph</div></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                
        </div>
    );
};

export default Dashboard;

function TotalDeliveries(){
    return(
        <div>1</div>
    );
};

function SuccessfulDeliveries(){
    return(
        <div>2</div>
    );
};
function PendingDeliveries(){
    return(
        <div>3</div>
    );
};
function FailedDeliveries(){
    return(
        <div>4</div>
    );
};

