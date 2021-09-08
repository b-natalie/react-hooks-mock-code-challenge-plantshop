import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArray, searchInput }) {

  const displayedPlants = plantArray.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <ul className="cards">{displayedPlants.map(plant => {
      return <PlantCard key={plant.id} plant={plant}/>
    })}</ul>
  );
}

export default PlantList;
