import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./TodoList.module.scss";
import List from "./List";

import { addTask } from "./actionCreators";

const TODO_SCHEMA = Yup.object({
  task: Yup.string()
    .min(4, "Too Short!")
    .max(45, "Too Long!")
    .required("Entered your task"),
});

const initialValues = {
  task: "",
};

const TodoList = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (values, formikBag) => {
    dispatch(addTask(values.task));
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TODO_SCHEMA}
    >
      <Form>
        <Field className={styles.input} type="text" name="task" />
        <button className={styles.btn} type="submit">
          Add
        </button>
        <ErrorMessage
          value={state.task}
          name="task"
          component="div"
          className={styles.error}
        />
        {state.taskList.length === 0 || (
          <List taskList={state.taskList} dispatch={dispatch} />
        )}
      </Form>
    </Formik>
  );
};

export default TodoList;
