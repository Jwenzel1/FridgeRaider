import React, { Component } from "react";
import AddIngredientsProfile from "./Profile/AddIngredientsProfile";
import StaticNavbar from "./Main/StaticNavbar";
import DisplayFavoriteRecipes from "./Profile/DisplayFavoriteRecipes";
import Login from "./Profile/Login";

class ProfileContainer extends Component {

  render() {
    return (
       <div>
      <div className="navBar">
        <StaticNavbar />
        </div>
        <div className="col-lg-6">
          <AddIngredientsProfile />
        </div>
        <div className="col-lg-6">

          <DisplayFavoriteRecipes />
          </div>

      </div>
    );
  }
}

export default ProfileContainer;
