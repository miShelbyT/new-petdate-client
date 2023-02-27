import styled from "styled-components";
import { PetImg, PetInfo } from "../styled/components";
import { Link } from "react-router-dom";


const PetCard = styled(Link)`
  border: 1px solid grey;
  padding: 16px;
  display: flex;
  text-decoration: none;
`;



function PetListItem({ breed, name, species, image_url, age, id }) {
  return (
    <PetCard to={`/pets/${id}`}>
      <PetInfo>
        <h2>{name}</h2>
        <h3>
          {species}: {breed}
        </h3>
        <h3>Age: {age}</h3>
      </PetInfo>
      <div>
        <PetImg src={image_url} alt="pet"></PetImg>
      </div>
    </PetCard>
  );
}

export default PetListItem;
