import styled from "styled-components";
import PetListItem from "./PetListItem";

const PetContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  /* grid-auto-rows:minmax(170px, auto); */
  grid-gap: 1em;
  background: linear-gradient(90deg, rgba(240,212,48,1) 0%, rgba(241,241,166,1) 100%);
`;

function PetList({ pets }) {
  const renderPets = pets.map((pet) => <PetListItem key={pet.id} {...pet} />);
  return <PetContainer>{renderPets}</PetContainer>;
}

export default PetList;
