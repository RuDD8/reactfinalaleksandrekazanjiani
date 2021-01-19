import map from './Img/map.svg';
import map1 from './Img/map1.svg';
import call from './Img/call.svg';
import email from './Img/email.svg';
import key from './Img/key.svg';
import tbilisi from './Img/map.png';
import btu from './Img/btu.png';
import smartphone from './Img/smartphone.svg';
import facebook from './Img/facebook.svg';
import ImageCarousel from './Components/ImageCarousel';
import './App.css';
import React, { Component } from "react";
import ValidatedLoginForm from "./ValidatedLoginForm";
import { Redirect, BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class HideandSeek extends Component {
  constructor() {
    super()
    this.state = {
      showMe: true
    }
  }
  operation() {
    this.setState({
      showMe: !this.state.showMe
    })
  }
  render() {
    return (
      <div class="navbar">
      </div>
    )
  }
}
const HomePage = () => {
  return <React.Fragment>
    <div class="container">
      <h1 style={{ 'color': '#000000' }}>Welcome To my Project</h1>
      <h2 style={{ 'color': '#000000' }}>BTU React Final</h2>
      <img class="btu" src={btu} />
      <div class="card-1">
      </div>
    </div> <br />
  </React.Fragment>
}
const ContactPage = () => {
  return <React.Fragment>
    <div class="contact-back">
      <div class="contact" >
        <h1 class="contacth">Contact Info</h1>
        <img class="map1" src={map1} />
        <p class="locat">Tbilisi</p>
        <img class="call" src={call} />
        <p class="ph">(032) 551534746</p>
        <img class="email" src={email} />
        <p class="em">aleksandre.kazanjiani.1@btu.edu.ge</p>
        <img class="tbilisi" src={tbilisi} />
      </div>
    </div>
  </React.Fragment>
}
const AboutPage = () => {
  return <React.Fragment>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div class="container">

      <h1>Hello</h1>
      <h2>My Name Is Aleksandre Kazanjiani</h2>
      <h3>I Live in Tbilisi and Study in BTU</h3>
    </div>
    <br /><br /><br />
  </React.Fragment>
}
const Auth = () => {
  return <React.Fragment>
    <div class="authorization-container">
      <div class="authorization-card">
        <img style={{ "width": "100px", "margin-top": "60px" }} src={key} alt="key" />
        <h1>Log In</h1>
        <ValidatedLoginForm />
      </div>
    </div>
    <br /><br /><br />

  </React.Fragment>

}

const NavBar = () => {
  return <React.Fragment><div class="navbar">
    <Link className="nav-li" to="/">Main</Link>
    <Link className="nav-li" to="/contact">Contact Info</Link>
    <Link className="nav-li" to="/about">About Page</Link>
    <Link className="nav-li" to="/auth">Login</Link>
    <HideandSeek />
  </div>
  </React.Fragment>
}
const Header = () => {
  return <ImageCarousel />
}
const Footer = () => {
  return <React.Fragment><div class="footer">
    <p className="desc">Final Project For React BTU</p>
    <img className="map" src={map} />
    <a className="maplink" href="https://www.google.com/maps/place/%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98/@41.7326304,44.698769,11z/data=!3m1!4b1!4m5!3m4!1s0x40440cd7e64f626b:0x61d084ede2576ea3!8m2!3d41.7151377!4d44.827096">Tbilisi</a>
    <img className="smartphone" src={smartphone} />
    <p className="phone">551534746</p>
    <img className="facebook" src={facebook} />
    <a className="facebooklink" href="https://www.facebook.com/BTUGEORGIA">Facebook Page</a>

  </div>
  </React.Fragment>
}

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/auth" component={Auth} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
