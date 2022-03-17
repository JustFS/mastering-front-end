import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import ConnectModal from "./components/ConnectModal";
import { auth } from "./utils/firebase.config";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [user, setUser] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button onClick={() => logout()}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        )}
        {user ? <CreatePost /> : <ConnectModal />}
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
