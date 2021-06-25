import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = ({ onAddGoal }) => {
  const [ enteredValue, setEnteredValue ] = useState("");

  const goalInputChangeHandler = e => setEnteredValue(e.target.value)
  
  const formSubmitHandler = e => {
    e.preventDefault();
    onAddGoal(enteredValue);
    setEnteredValue("");
  };
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input 
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit" disabled={!enteredValue}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
