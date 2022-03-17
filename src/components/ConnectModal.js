import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const ConnectModal = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          style={{ background: signUp ? "rgb(36,36,36)" : "rgb(83,83,83)" }}
          onClick={() => setSignUp(true)}
        >
          S'inscrire
        </button>
        <button
          style={{ background: signUp ? "rgb(83,83,83)" : "rgb(36,36,36)" }}
          onClick={() => setSignUp(false)}
        >
          Se connecter
        </button>
      </div>
      {signUp ? <SignUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;
