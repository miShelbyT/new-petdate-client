import PetListItem from "./PetListItem"

function PetList({pets}) {

  const renderPets = pets.map((pet) => <PetListItem key={pet.id} {...pet}/> )
  return (
    <div className="pet-list">
    {renderPets}
    </div>
  )
}

export default PetList