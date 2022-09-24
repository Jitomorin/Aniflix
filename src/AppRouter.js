import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { MangaPage } from "./pages/MangaPage";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/mangapage" component={MangaPage} />
      </Routes>
    </Router>
  );
};
