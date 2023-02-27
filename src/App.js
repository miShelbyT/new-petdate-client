import styled from "styled-components";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PetList from "./components/PetList";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import PetPlusDates from "./components/PetPlusDates";

const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 8fr 1fr;
`;

function App() {
  const [pets, setPets] = useState([]);
  const [user, setUser] = useState(null);

  const currentUser = 4;

  const getUser = async () => {
    const resp = await fetch(`http://localhost:9292/users/${currentUser}`);
    const userData = await resp.json();
    setUser(userData);
  };

  const getPets = async () => {
    const resp = await fetch("http://localhost:9292/pets");
    const petData = await resp.json();
    setPets(petData);
  };

  useEffect(() => {
    getPets();
    getUser();
  }, []);

  return (
    <MainContainer>
      <SideBar />
      <Routes>
        <Route path="/" element={<PetList pets={pets} />} />
        <Route path="/pets/:id" element={<PetPlusDates />} />
      </Routes>
      <Footer />
    </MainContainer>
  );
}

export default App;
