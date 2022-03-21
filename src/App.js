import React, { useEffect, useRef, useState } from "react";
import { UserNumber } from "./components/AppContext";
import OtherComponent from "./components/OtherComponent";

const App = () => {
  const [myNumber, setMyNumber] = useState(0);
  const selectedNumber = useRef();

  useEffect(() => {
    console.log("Le nombre a changé !");
  }, [myNumber]);

  return (
    <UserNumber.Provider value={myNumber}>
      <div className="app">
        <p>{myNumber}</p>
        <button onClick={() => setMyNumber(Number(myNumber) + 1)}>
          Incrémenter +1
        </button>
        <label htmlFor="">Numéro de départ</label>
        <input
          type="number"
          defaultValue={0}
          ref={selectedNumber}
          onChange={() => setMyNumber(selectedNumber.current.value)}
        />
      </div>
      <OtherComponent />
    </UserNumber.Provider>
  );
};

export default App;
