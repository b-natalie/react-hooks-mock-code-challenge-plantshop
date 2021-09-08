import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantArray, renderNewPlant }) {
  
  const [ searchInput, setSearchInput ] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  return (
    <main>
      <NewPlantForm renderNewPlant={renderNewPlant}/>
      <Search handleSearchInput={handleSearchInput}/>
      <PlantList plantArray={plantArray} searchInput={searchInput}/>
    </main>
  );
}

export default PlantPage;
