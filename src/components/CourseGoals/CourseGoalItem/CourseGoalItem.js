import React from 'react';
import styles from "./CourseGoalItem.module.css";

const CourseGoalItem = ({ id, onDelete, children }) => {
  // const [deleteText, setDeleteText] = useState('');
  
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };
  
  return (
    <li className={styles["goal-item"]} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;