import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./List.module.scss";
import { deleteTask, completeTask } from "../actionCreators";

const List = ({ taskList, dispatch }) => {
  const newList = taskList.map(({ id, text, isCompleted }) => (
    <li
      className={!isCompleted ? styles.liNotCompleted : styles.liCompleted}
      key={id}
      id={id}
      onDoubleClick={() => dispatch(completeTask(id))}
    >
      {text}
      <span
        onClick={() => dispatch(deleteTask(id))}
        className={styles.iconSpan}
      >
        <FaTrashAlt className={styles.icon} />
      </span>
    </li>
  ));
  return (
    <>
      <ul className={styles.ul}>{newList}</ul>
    </>
  );
};

export default List;
