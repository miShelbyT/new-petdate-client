import styled from "styled-components"
import PetDateItem from "./PetDateItem"

function PetDateList({meets, petName}) {

  const PetDatesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
  `

  const petDates = meets.map(meetup => <PetDateItem key={meetup.id} meetup={meetup} petName={petName}/>)
  return (
    <PetDatesContainer>{petDates}</PetDatesContainer>
  )
}

export default PetDateList