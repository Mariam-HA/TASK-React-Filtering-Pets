import React, { useState } from "react";

function PetItem({ pet }) {
  const [image, setImage] = useState(pet.image);

  function changeImage() {
    setImage(pet.image2);
  }

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={changeImage}>
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>

          <button></button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
