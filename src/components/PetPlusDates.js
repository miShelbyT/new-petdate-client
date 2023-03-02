import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PetDateList from "./PetDateList";

const PetDateContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(240, 212, 48, 1) 0%,
    rgba(241, 241, 166, 1) 100%
  );
`;

const PetInfo = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 16px;
  margin: 14px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  & img {
    /* max-height: 70%; */
    /* width: 40%; */
    object-fit: cover;
    max-height: 250px;
    border-radius: 8px 2px;
  }
`;

function PetPlusDates() {
  const [petInfo, setPetInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPetInfo();
  }, []);

  async function getPetInfo() {
    const resp = await fetch(`http://localhost:9292/pets/${id}`);
    const res = await resp.json();
    setPetInfo(res);
  }
  if (!petInfo) return <h1>Loading....</h1>;

  return (
    <PetDateContainer>
      <PetInfo>
        <h2>{petInfo.name}</h2>
        <h3>
          {petInfo.species}: {petInfo.breed}
        </h3>
        <h3>Age: {petInfo.age}</h3>
        <img src={petInfo.image_url} alt="pet"></img>
        <PetDateList meets={petInfo.meetups} petName={petInfo.name}/>
      </PetInfo>
    </PetDateContainer>
  );
}

export default PetPlusDates;
