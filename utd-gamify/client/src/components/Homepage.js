import React from "react";
import SportsList from "./SportsList";
import ValidateNetID from "./ValidateNetID";
import chess from "../images/chess.jpeg";
import pool from "../images/pool.jpeg";
import tabletennis from "../images/tabletennis.jpeg";
import foozball from "../images/foozball.jpeg";
import squash from "../images/squash.jpg";

const HomePage = () => {
  //     const jumbotronStyler = {
  //         background: `url('backgroundimage.jpg') no-repeat center center fixed`,
  //    -webkitBackgroundSize: `cover`;
  //    -moz-background-size: cover;
  //    background-size: cover;
  //    -o-background-size: cover;
  //     }
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">UTD Gamify App</h1>
        <p class="lead">Play Indoor Games at UTD</p>
        <ValidateNetID />
      </div>
      {/* <div class="container mx-3">
        <div class="row mt-3">
          <SportsList gameImage={chess} />
          <SportsList gameImage={pool} />
          <SportsList gameImage={tabletennis} />
          <SportsList gameImage={foozball} />
          <SportsList gameImage={squash} />
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
