import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { MangaPage } from "./pages/MangaPage";
import { AppRouter } from "./AppRouter";
import { AppBar, Button } from "@mui/material";
import * as routes from "./constants/routes";
import { NavigationDrawer } from "./components/NavigationDrawer";

function App() {
  return (
    <div className="App">

    <NavigationDrawer/>
       <Router>
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.MANGAPAGE} element={<MangaPage />} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
