import { createStore } from "redux";

//create a initial state

const INITIAL_STATE = {
  data: [
    {
      id: "32132",
      title: "course 1"
    },
    {
      id: "3583513",
      title: "course 2"
    }
  ]
};

// Create a Reducer

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.course] };
      break;

    default:
      return state;
      break;
  }
}

const store = createStore(courses);
export default store;
