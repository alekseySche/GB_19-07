import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import Home from "../Home";
import { News } from "../News";
import { ThemeContext } from "../../utils/ThemeContext";

export const Router = () => {
  const [bgColor, setBgColor] = useState("white");
  const changeColor = () => {
    setBgColor((prevColor) => (prevColor === "white" ? "gray" : "white"));
  };
  return (
    <ThemeContext.Provider value={{ theme: bgColor, changeTheme: changeColor }}>
      <BrowserRouter>
        <ul>
          <li style={{ backgroundColor: bgColor }}>
            <Link to="/home">HOME</Link>
          </li>
          <li style={{ backgroundColor: bgColor }}>
            <Link to="/profile">PROFILE</Link>
          </li>
          <li style={{ backgroundColor: bgColor }}>
            <Link to="/news">NEWS</Link>
          </li>
        </ul>

        <Switch>
          <Route
            path="/profile"
            render={(data) => (
              <Profile match={data.match} history={data.history} />
            )}
          ></Route>
          <Route path="/home/:chatId?">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/nochat">
            <div> No such chat</div>
            <Link to="/home">HOME</Link>
          </Route>
          <Route path="/" exact>
            <h2>WELCOME</h2>
          </Route>
          <Route path="*">
            <h2>404</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

const add = (a, b) => {
  return a + b;
};

const subtr = (a, b) => {
  return a - b;
};

const makeLogger = (fn) => {
  return (...args) => {
    console.log(args);
    fn(args);
  };
};

const subWithLogger = makeLogger(subtr);
const addWithLogger = makeLogger(add);

addWithLogger(1, 2, 4);
subWithLogger(10, 1, 0);