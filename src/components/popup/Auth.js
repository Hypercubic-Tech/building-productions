import { useState } from "react";

import AuthModal from "./AuthModal";
import RegModal from "./RegModal";

const Auth = ({ onClose }) => {
  const [defaultState, setDefaultState] = useState(true);

  const handleAuthorization = () => {
    setDefaultState(false);
  };

  const handleRegistration = () => {
    setDefaultState(true);
  };

  return (
    <>
      {defaultState ? (
        <AuthModal
          handleAuthorization={handleAuthorization}
          onClose={onClose}
        />
      ) : (
        <RegModal handleRegistration={handleRegistration} onClose={onClose} />
      )}
    </>
  );
};

export default Auth;
