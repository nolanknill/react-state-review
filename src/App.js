import { useState } from "react";
import dogsData from "./data/dogs.json";
import Candidate from "./components/Candidate/Candidate";
import Matches from "./components/Matches/Matches";

function App() {
  const [dogs, setDogs] = useState(dogsData);

  const matchedDogs = dogs.filter(dog => dog.matched === true);
  
  // Find first dog without the matched key
  const candidateDog = dogs.find(dog => {
    return !dog.hasOwnProperty('matched');
  });

  const rejectDog = (id) => {
    // remove rejected dog from array
    const filteredDogs = [...dogs].filter(dog => dog.id !== id)

    setDogs(filteredDogs);
  }

  const matchDog = (id) => {
    // check if id matches, if yes -> add matched : true to object
    const updatedDogs = dogs.map(dog => {
      if (id === dog.id) {
        return {
          ...dog,
          matched: true
        }
      }

      return dog;
    })

    setDogs(updatedDogs);
  }

  return (
    <main>
      <Matches dogs={matchedDogs} />
      
      {candidateDog 
        ? <Candidate
            rejectDog={rejectDog}
            matchDog={matchDog}
            dog={candidateDog}
          />
        :
          <p>Sorry, there are no possible matches near you...</p>
      } 
    </main>
  );
}

export default App;
