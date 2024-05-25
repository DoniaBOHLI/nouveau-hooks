import React from 'react';
import './App.css';
import data from './Data';
import PetsList from './PetsList';


function App() {

  const [pets, setPets] = React.useState(data)

  const [filtered, setFiltered] = React.useState(pets)

  const filter = (event) => {

    if (event.target.name === 'Title') {
      const raceList = filtered.filter(pet => { return pet.race.toLowerCase().includes(event.target.value.toLowerCase()) });
      setFiltered(raceList)
    }
    else if (event.target.name === 'Description') {
      const typeList = filtered.filter(pet => { return pet.type.toLowerCase().includes(event.target.value.toLowerCase()) });
      setFiltered(typeList)
    }
    else if (event.target.name === 'Image') {
      const locationList = filtered.filter(pet => { return pet.location.toLowerCase().includes(event.target.value.toLowerCase()) });
      setFiltered(locationList)
    }
    if (event.target.value === '') {
      setFiltered(pets);
    }
  }
  export default App; 