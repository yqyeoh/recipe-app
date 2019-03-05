import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import AdminPage from "./components/AdminPage/AdminPage";
import RecipeForm from './components/RecipeForm/RecipeForm'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/admin" component={AdminPage} />
              <Route
                path="/recipe/new"
                render={props => <RecipeForm {...props} returnPath="/admin" />}
              />
              <Route
                path="/recipe/:id"
                render={props => <RecipeForm {...props} returnPath="/admin" />}
              />
              <Redirect from="/" to="/home" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
