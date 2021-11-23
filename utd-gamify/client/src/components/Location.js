import { useLocation, useNavigate } from "react-router";
import SportsList from "./SportsList";
import ecsw from "../images/ecsw.jpeg";
import activitycenter from "../images/activitycenter.jpeg";
import jsom from "../images/jsom.jpeg";
import React, { useState, useEffect } from "react";

const Location = () => {
  const [data, setData] = useState(null);
  const { state } = useLocation();
  const { netID } = state;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/getlocations")
      .then((res) => res.json())
      .then( (data) => setData(data));
    },[]);

  if (data!==null){
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">UTD Gamify App</h1>
        <p class="lead">Play Indoor Games at UTD</p>
      </div>
      <div class="container mx-3">
        <div class="row mt-3">
          {data.map((d) => {
            let gameImg = d.location_name + '.jpg';
            console.log(gameImg.split(" ").join(""),d.location_name);
            <SportsList gameImage={gameImg} imageName={d.location_name} />
          })}
        </div>
      </div>
    </>
  );
  }else{
    return (<p>Hello</p>);
  }
};

export default Location;
