import { Button, CircularProgress } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import "./styles.css";
import { Header } from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { MostPopularList } from "../components/MostPopularList";
import { NavigationDrawer } from "../components/NavigationDrawer";

export const HomePage = () => {
  return (
    <div className="main">
      <MostPopularList />
    </div>
  );
};
