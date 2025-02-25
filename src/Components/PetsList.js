import PetItem from "./PetItem";
import pets from "../petsData";
import { useState } from "react";
import Search from "./Search";
import Selector from "./Selector";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const filteredType = pets.filter((pet) => {
    return pet.type.includes(type);
  });

  const filteredPets = filteredType.filter((pet) => {
    return pet.name.toLowerCase().includes(query.toLowerCase());
  });

  const petList = filteredPets.map((pet) => <PetItem pet={pet} key={pet.id} />);

  function changeQuery(event) {
    setQuery(event.target.value);
  }
  //filter pets by specie

  function bySpecie(event) {
    setType(event.target.value);
  }

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <Search changeQuery={changeQuery} />
              <br />
              Type:
              <Selector bySpecie={bySpecie} />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
