import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { Button } from "@mui/material";
import * as routes from "./constants/routes";
import { NavigationDrawer } from "./components/NavigationDrawer";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./styles.css";
import {NewAnimePage} from "./pages/NewAnimePage";
import {TrendingAnimePage} from "./pages/TrendingAnimePage";
import {SearchAnimePage} from "./pages/SearchAnimePage";
import {GenrePage} from "./pages/GenrePage";

function App() {
  
  return (
    <Router>
      {" "}
      <div className="App">
        <NavigationDrawer />
        <Routes>
          <Route path={routes.NEW} element={<NewAnimePage />} />
          <Route path={routes.TRENDING} element={<TrendingAnimePage />} />
          <Route path={routes.GENRE} element={<GenrePage />} />
          <Route path={routes.SEARCH} element={<SearchAnimePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
