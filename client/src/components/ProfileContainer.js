import React, { Component } from "react";
import MainPanel from "./Main/MainPanel";
import StaticNavbar from "./Main/StaticNavbar";
import DisplayRecipes from "./Main/DisplayRecipes";
import Login from "./Profile/Login";

class ProfileContainer extends Component {

  render() {
    return (
      <div>
       <StaticNavbar />
        <div className="col-lg-6">
        </div>
      </div>
    );
  }
}

export default ProfileContainer;