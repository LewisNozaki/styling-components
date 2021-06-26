import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = ({ onAddGoal }) => {
  const [ enteredValue, setEnteredValue ] = useState("");
  const [ isValid, setIsValid ] = useState(true);

  const goalInputChangeHandler = e => setEnteredValue(e.target.value)
  
  const formSubmitHandler = e => {
    e.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return
    }

    onAddGoal(enteredValue);
    setEnteredValue("");
  };

  let invalidStyling = {
    borderColor: !isValid ? "red" : "black",
    background: !isValid ? "salmon" : "transparent"
  }
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input 
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler} 
          style={invalidStyling}
        />
      </div>
      <Button 
        type="submit" 
        // disabled={!enteredValue}
        >
          Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
