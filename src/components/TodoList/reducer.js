import { ACTION_TYPES } from "./actionTypes";
const { CHANGE, ADD_TASK, DELETE_TASK, COMPLETED_TASK } = ACTION_TYPES;

const _ = require("lodash");

export const initialState = {
  task: "",
  taskList: [],
  isCompleted: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case CHANGE: {
      return { ...state, task: action.payload };
    }
    case ADD_TASK:
      return {
        task: "",
        taskList: [
          ...state.taskList,
          {
            id: _.uniqueId(),
            text: action.payload,
            isCompleted: false,
          },
        ],
      };
    case DELETE_TASK: {
      return {
        ...state,
        taskList: state.taskList.filter(({ id }) => id !== action.payload),
      };
    }
    case COMPLETED_TASK: {
      return {
        ...state,
        taskList: state.taskList.map((taskItem) =>
          taskItem.id === action.payload
            ? { ...taskItem, isCompleted: true }
            : { ...taskItem }
        ),
      };
    }
    default:
      return state;
  }
}
