import styled from "styled-components";

const SideBarDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Shantell+Sans:ital,wght@1,300&display=swap");
  background-color: rgb(238, 188, 238);
  padding: 20px;

  & h1, h2 {
    font-family: "Shantell Sans", cursive;
  }
`;

const Btn = styled.button`
  padding: 10px;
  margin: 8px;
  border-radius: 8px 2px;
  background-color: var(--deep-purple);
  color: azure;
  font-family: inherit;
  font-size: 14px;
`;

function SideBar() {
  return (
    <SideBarDiv>
      <h1>Is your pet bored?!</h1>
      <h2>
        Do they chew the furniture? Or your favorite shoes? Even worse, do
        they💩in inappropriate places??
      </h2>
      <h2>
        Your bestie might need a PetDate. Luckily for you, you've come to the
        right place!
      </h2>
      <h2>PS Click on a pet to view more info, and their PetDate schedule!</h2>
      <div>
        <Btn className="btn">Log In / Sign Up</Btn>
        <Btn className="btn">Add New Pet</Btn>
      </div>
    </SideBarDiv>
  );
}

export default SideBar;
