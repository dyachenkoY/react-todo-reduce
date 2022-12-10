import { ACTION_TYPES } from "./actionTypes";
import _ from "lodash";
const { ADD_TASK, DELETE_TASK, COMPLETED_TASK } = ACTION_TYPES;

export const initialState = {
  taskList: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
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
        taskList: state.taskList.map((taskItem) => ({
          ...taskItem,
          isCompleted:
            taskItem.id === action.payload ? true : taskItem.isCompleted,
        })),
      };
    }
    default:
      return state;
  }
}
