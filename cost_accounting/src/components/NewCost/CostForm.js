import { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     name: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} value={inputName} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={inputAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            step="2024-31-01"
            onChange={dateChangeHandler}
            value={inputDate}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Cost</button>
          <button type="button" onClick={() => props.onFormClose()}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
