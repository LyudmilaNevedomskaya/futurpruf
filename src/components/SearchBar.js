import React, { useState } from "react";
import BuildingData from "./BuildingData";
import { building, cellTower } from '../data';
import TableHeader from "./TableHeader";

export default function SearchBar() {
  const [query, setQuery] = useState('');
  //console.log("QUERY", query);
  console.log('BUILDING', building);
  function userInput(event) {
    const userValue = event.target.value
    setQuery(userValue)
  }

  const buildingsData = building.filter(i => {
    if (query === '') {
      return i;
    } else if (i.id.toLowerCase().includes(query.toLowerCase())) {
      return i;
    } else if (i.name.toLowerCase().includes(query.toLowerCase())) {
      return i;
    }
  }).map(item => {
    return (
      <BuildingData key={item.id} {...item} />
    )
  })
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter ID or Building Name"
          value={query}
          onChange={userInput} />
      </div>
      <TableHeader />
      {buildingsData}
    </>
  )
}