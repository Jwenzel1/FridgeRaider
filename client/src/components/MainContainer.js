import React, { Component } from "react";
import MainPanel from "./Main/MainPanel";
import StaticNavbar from "./Main/StaticNavbar";
import DisplayRecipes from "./Main/DisplayRecipes";
import Login from "./Profile/Login";
import "./Main/MainPage.css"

class MainContainer extends Component {

  render() {
    return (
      <div>
      <div className="navBar">
        <StaticNavbar />
        </div>
        <div className="col-lg-6">
          <MainPanel />
        </div>
        <div className="col-lg-6">
          
          <DisplayRecipes />
          </div>
       
      </div>
    );
  }
}

export default MainContainer;
