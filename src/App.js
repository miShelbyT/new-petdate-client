import { useEffect, useState } from "react";
import PetList from "./components/PetList";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {

  const [pets, setPets] = useState([])
  const [user, setUser] = useState(null)

  const currentUser = 4

  const getUser = async () => {
    const resp = await fetch(`http://localhost:9292/users/${currentUser}`)
    const userData = await resp.json()
    setUser(userData)
  }

  const getPets = async () => {
    const resp = await fetch("http://localhost:9292/pets")
    const petData = await resp.json()
    setPets(petData)
  }

  useEffect(() => {
    getPets()
    getUser()
  },[])


  return (
    <div className="App">
      <SideBar />
      <PetList pets={pets}/>
      <Footer />
    </div>
  );
}

export default App;
