import React from "react";
import Maze from "@/main/assets/images/maze.svg";

export const NotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Page not found</h1>
      <div className="page-not-found__image">
        <img src={Maze} alt="Page not found" />
      </div>
    </div>
  );
};
