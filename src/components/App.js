import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [ plantArray, setPlantArray ] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plantData => {
      setPlantArray(plantData)
    })
  }, [] )

  function renderNewPlant(plant) {
    setPlantArray([...plantArray, plant])
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plantArray={plantArray} renderNewPlant={renderNewPlant}/>
    </div>
  );
}

export default App;
