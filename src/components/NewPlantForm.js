import React, { useState } from "react";

function NewPlantForm({ renderNewPlant }) {

  const [ formData, setFormData ] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleFormData(event) {
    const key = event.target.name;
    const value = event.target.value;

    setFormData({...formData, 
      [key] : value
    })

    // console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(newPlant => renderNewPlant(newPlant))

    setFormData({
      name: "",
      image: "",
      price: ""
    })

    event.target.reset();
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleFormData}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleFormData}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleFormData}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
