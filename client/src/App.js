import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import ProfileContainer from "./components/ProfileContainer";

const App = () =>

<Router>
 <div>
   <Switch>
  	<Route exact path="/" component={MainContainer} />
  	<Route exact path="/main" component={MainContainer} />
  	<Route exact path="/profile" component={ProfileContainer} />
   </Switch>
 </div>
</Router>
export default App;
