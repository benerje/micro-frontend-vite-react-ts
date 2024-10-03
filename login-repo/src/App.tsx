import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "reduxStore/store";
import { setInputValue } from "reduxStore/store";

const App: React.FC = () => {
  const inputValue = useSelector((state: RootState) => state.input.value);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value)); // Update Redux state
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter input here"
      />
      <p>Shared Input Value to login: {inputValue}</p>
    </div>
  );
};

export default App;
