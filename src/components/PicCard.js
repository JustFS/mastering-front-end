import { useRef, useState } from "react";
import axios from "axios";
import Delete from "./Delete";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editPicture } from "../feature/pictures.slice";

const PicCard = ({ pic }) => {
  const [edit, setEdit] = useState(false);
  const artistInput = useRef();
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(false);

    const data = {
      artist: artistInput.current.value,
      year: pic.year,
      photo: pic.photo,
    };

    axios.put("http://localhost:5000/pictures/" + pic.id, data).then(() => {
      dispatch(editPicture([data.artist, pic.id]));
    });
  };

  return (
    <div className="pic-card">
      <img src={pic.photo} alt={"photo de " + pic.artist} />
      <div className="infos">
        <div className="title">
          {edit ? (
            <div>
              <input
                defaultValue={pic.artist}
                ref={artistInput}
                autoFocus
              ></input>
              <button onClick={() => handleEdit()}>Valider</button>
            </div>
          ) : (
            <h4>
              {artistInput.current ? artistInput.current.value : pic.artist}
            </h4>
          )}
          <p>{pic.year}</p>
        </div>
        <div className="btn-container">
          <div className="edit-icon" onClick={() => setEdit(!edit)}>
            <FaRegEdit />
          </div>
          <Delete id={pic.id} />
        </div>
      </div>
    </div>
  );
};

export default PicCard;
