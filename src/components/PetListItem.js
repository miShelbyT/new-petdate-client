import styled from "styled-components";
import { PetImg } from "../styled/components";
import { Link } from "react-router-dom";

const PetCard = styled(Link)`
  text-decoration: none;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function PetListItem({ image_url, id }) {
  return (
    <PetCard to={`/pets/${id}`}>
      <img src={image_url} alt="pet"></img>
    </PetCard>
  );
}

export default PetListItem;
