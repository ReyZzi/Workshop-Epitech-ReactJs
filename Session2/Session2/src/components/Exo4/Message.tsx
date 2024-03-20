import { FC, useState } from "react";
import Alert from "./Alert";

const Message: FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div>
      {showAlert && <Alert message="Ceci est une alerte !" />}
      <button onClick={handleClick}>
        {showAlert ? "Masquer l'alerte" : "Afficher l'alerte"}
      </button>
    </div>
  );
};

export default Message;
