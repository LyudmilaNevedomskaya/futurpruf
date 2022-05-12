import React from "react";

export default function BuildingData(props) {
  //console.log(props);
  return (
    <div className="buildings-container">
      <div className="buildings">
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.xCoordinate}</p>
        <p>{props.yCoordinate}</p>
      </div>
      <hr/>
    </div>
  )
}