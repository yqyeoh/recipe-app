import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import AdminPage from './components/AdminPage/AdminPage';
import RecipeForm from './components/RecipeForm/RecipeForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/admin" component={AdminPage} />
            <Route path="/recipe/new" render={props => <RecipeForm {...props} returnPath="/admin" />} />
            <Route path="/recipe/:id" render={props => <RecipeForm {...props} returnPath="/admin" />} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
