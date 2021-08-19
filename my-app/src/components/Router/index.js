import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import Home from "../Home";
import { News } from "../News";
import { ThemeContext } from "../../utils/ThemeContext";
import { PrivateRoute } from "../../hocs/PrivateRoute";
import { PublicRoute } from "../../hocs/PublicRoute";
import { Login } from "../Login";

export const Router = () => {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/news">NEWS</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute
          authed={isAuthed}
          path="/profile"
          render={(data) => (
            <Profile match={data.match} history={data.history} />
          )}
        />
        <PrivateRoute authed={isAuthed} path="/home/:chatId?">
          <Home />
        </PrivateRoute>
        <PublicRoute authed={isAuthed} path="/news">
          <News />
        </PublicRoute>
        <PrivateRoute authed={isAuthed} path="/nochat">
          <div> No such chat</div>
          <Link to="/home">HOME</Link>
        </PrivateRoute>
        <Route path="/" exact>
          <h2>WELCOME</h2>
        </Route>
        <PublicRoute authed={isAuthed} path="/login" exact>
          <Login />
        </PublicRoute>
        <PublicRoute authed={isAuthed} path="/signup" exact>
          <Login isSignUp />
        </PublicRoute>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};