import React, { Component } from "react";
import "./App.css";
import Listing from "./components/Product/listing";

// import PrivateRoute from "./components/private-route/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/listings" component={Listing} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
