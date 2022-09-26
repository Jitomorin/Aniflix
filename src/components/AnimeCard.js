import { Tooltip } from "@mui/material";
import React from "react";
import "./styles.css";

export const AnimeCard = (props) => {
  return (
    <Tooltip
      title={
        props.synopsis == null ? (
          <p style={{ fontSize: "1rem" }}>No Synopsis</p>
        ) : (
          <p style={{ fontSize: "1rem" }}>{props.synopsis}</p>
        )
      }
      followCursor
    >
      <div
        className="anime_card"
        style={{
          backgroundImage: 'url("' + props.image_url + '")',
        }}
      >
        <div className="anime_card_content">
          <h3>{props.title}</h3>
        </div>
      </div>
    </Tooltip>
  );
};
