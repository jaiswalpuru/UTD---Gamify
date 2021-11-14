import { useLocation, useNavigate } from "react-router";
import SportsList from "./SportsList";
import ecsw from "../images/ecsw.jpeg";
import activitycenter from "../images/activitycenter.jpeg";
import jsom from "../images/jsom.jpeg";

const Location = () => {
  const { state } = useLocation();
  const { netID } = state;
  console.log(netID);

  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">UTD Gamify App</h1>
        <p class="lead">Play Indoor Games at UTD</p>
      </div>
      <div class="container mx-3">
        <div class="row mt-3">
          <SportsList gameImage={ecsw} imageName="ECSW" />
          <SportsList gameImage={activitycenter} imageName="ActivityCenter" />
          <SportsList gameImage={jsom} imageName="JSOM" />
        </div>
      </div>
    </>
  );
};

export default Location;
