import React from "react";

export const MangaPage = (title, status, tags) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{status}</h2>
      <h3>{tags}</h3>
    </div>
  );
};
