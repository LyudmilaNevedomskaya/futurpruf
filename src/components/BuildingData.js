import React, { useState } from "react";
import NearestCellTower from "./NearestCellTower";

export default function BuildingData(props) {
  //console.log(props);

  const [showCellTower, setShowCellTower] = useState(false)

  function handleClick(event, data) {
    const userChoice = event.target.getAttribute('data-id');

    //console.log(userChoice);
    setShowCellTower(true)
  }
  return (
    <>
    {showCellTower ? <NearestCellTower /> : null}

    <div className="buildings-container" onClick={handleClick} >
      <div className="buildings">
        <p data-id={props.id}>{props.id}</p>
        <p data-id={props.id} className='building-name'>{props.name}</p>
        <p data-id={props.id}>{props.xCoordinate}</p>
        <p data-id={props.id}>{props.yCoordinate}</p>
      </div>
      <hr/>
    </div>
    </>
  )
}