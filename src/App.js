import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import NavBar from './components/navbar/NavBar'
class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
      </>
    );
  }
}

export default App;
