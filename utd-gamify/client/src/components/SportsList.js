/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const SportsList = ({ gameImage }) => {
  console.log(gameImage);
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
    
        <img src={srcAttr} class="img-fluid" style={myStyle}/>
    
      </div>
      {/* <div class="caption">
          {/* <a href="videos/<%= video._id %>"><%= video.title %></a> */}
    </>
  );
};

export default SportsList;
