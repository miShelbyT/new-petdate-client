import React from "react";

function PetListItem({ breed, name, species, image_url, age }) {
  return (
    <div className="pet-card">
      <div className="pet-info">
        <h2>{name}</h2>
        <h3>
          {species}: {breed}
        </h3>
        <h3>Age: {age}</h3>
      </div>
      <div>
        <img src={image_url} alt="pet"></img>
      </div>
    </div>
  );
}

export default PetListItem;
