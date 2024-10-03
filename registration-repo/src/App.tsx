import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "reduxStore/store";
import { setInputValue } from "reduxStore/store";

function App() {
  const inputValue = useSelector((state: RootState) => state.input.value);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value)); // Update Redux state
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter input here"
      />
      <p>Shared Input Value to registration: {inputValue}</p>
    </div>
  );
}

export default App;
