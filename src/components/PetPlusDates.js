import styled from "styled-components";
import { PetImg, PetInfo } from "../styled/components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PetDateContainer = styled.div`
background: linear-gradient(90deg, rgba(240,212,48,1) 0%, rgba(241,241,166,1) 100%)`;

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
      </PetInfo>
      <div>
        <PetImg src={petInfo.image_url} alt="pet"></PetImg>
      </div>
    </PetDateContainer>
  );
}

export default PetPlusDates;
