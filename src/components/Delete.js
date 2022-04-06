import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";

const Delete = ({ id }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:5000/pictures/" + id);
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
