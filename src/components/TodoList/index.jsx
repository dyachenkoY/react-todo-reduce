import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./TodoList.module.scss";
import List from "./List";

import { handleChange, addTask } from "./actionCreators";

/* const TODO_SCHEMA = Yup.object({
  Task: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Entered your task"),
}); */

const TodoList = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Formik initialValues={initialState}>
      <Form>
        <Field
          onChange={({ target: { value } }) => dispatch(handleChange(value))}
          className={styles.input}
          value={state.task}
          type="text"
          name="Task"
        />
        <button
          className={styles.btn}
          type="button"
          onClick={() => dispatch(addTask(state.task))}
        >
          Add
        </button>
        <ErrorMessage value={state.task} name="Task" component="div" />
        {state.taskList.length === 0 || (
          <List taskList={state.taskList} dispatch={dispatch} />
        )}
      </Form>
    </Formik>
  );
};

export default TodoList;
