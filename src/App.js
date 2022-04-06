import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";

const App = () => {
  const [picsData, setPicsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => setPicsData(res.data));
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
