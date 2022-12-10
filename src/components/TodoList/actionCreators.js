import { ACTION_TYPES } from "./actionTypes";
const { ADD_TASK, DELETE_TASK, COMPLETED_TASK } = ACTION_TYPES;

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const completeTask = (id) => ({ type: COMPLETED_TASK, payload: id });
