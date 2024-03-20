import React from "react";

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div className="bg-red-500 text-white px-4 py-2 rounded">{message}</div>
  );
};

export default Alert;
