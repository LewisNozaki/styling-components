import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormInput = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     font-size: 2rem;
//     color: #333;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0.25rem 0.5rem;
//     margin: 20px 0;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }
// `;

const CourseInput = ({ onAddGoal }) => {
  const [ enteredValue, setEnteredValue ] = useState("");
  const [ isValid, setIsValid ] = useState(true);

  const goalInputChangeHandler = e => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(e.target.value)
  }
  
  const formSubmitHandler = e => {
    e.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return
    }
    
    // Resets the input to blank after submitting.
    onAddGoal(enteredValue);
    setEnteredValue("");
  };
  
  // let invalidClass = !isValid && "invalid";
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input 
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler} 
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