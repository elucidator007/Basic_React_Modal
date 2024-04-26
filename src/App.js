import { useState } from "react";
import "./styles.css";
import { Button } from "../components/button";
import { Modal } from "../components/modal";
import { InputText } from "../components/inputText";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>Basic Modal Code</h1>
      <h3>Enter some data below...</h3>
      {/* <input type="text" onChange={handleInputChange} /> */}
      <InputText handleInputChange={handleInputChange} />
      <Button
        onOpen={() => {
          console.log();
          setIsOpen(true);
        }}
      />
      {isOpen ? (
        <Modal onClose={handleClose} isOpen={isOpen} modalData={inputData} />
      ) : null}
    </div>
  );
}
