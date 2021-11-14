/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {useLocation, useNavigate} from 'react-router-dom'

const SportsList = ({ gameImage, imageName }) => {
  const { state } = useLocation();
  const { netID } = state;
  console.log(netID);


  let image = `${imageName}`;
  let imgUrl = image.replace('.jpg','')
  const navigate = useNavigate();
  const goToLocation = () => navigate(`/location/${imgUrl}`,  { state: { netID: netID }});
  // console.log(gameImage);
  //   var srcAttr = `../../images/${gameImage}`;
  //   console.log(typeof(srcAttr))
  //   console.log(srcAttr);

  var srcAttr = gameImage;

  const myStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div class="col">
        <a href="" onClick={(e) => {
          goToLocation(); 
        }}>
          <img src={srcAttr} class="img-fluid" style={myStyle} />
          <p>{imageName}</p>
        </a>
        
      </div>

      {/* onSubmit={(e) => {
          let re = new RegExp("^[a-zA-Z]{3}[0-9]{6}$");
          if (re.test(input)) {
            goToLocation();
          } else {
            e.preventDefault();
            console.log("Incorrect Net ID");
          }
        }} */}
      {/* <div class="caption">
          {/* <a href="videos/<%= video._id %>"><%= video.title %></a> */}
    </>
  );
};

export default SportsList;
