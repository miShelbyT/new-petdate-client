import styled from "styled-components";

const FootContainer = styled.div`
  background-color: rgb(144, 193, 236);
  grid-row: 2/3;
  grid-column: 1/3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  & h4 {
    color: rgb(11, 11, 83);
    font-size: 16px;
    font-family: "Shantell Sans", cursive;
  }
`;


function Footer() {
  return (
    <FootContainer>
      <h4>🐶 PetDates ~ For Your Best Pet Friends 2023 🐈</h4>
    </FootContainer>
  );
}

export default Footer;
