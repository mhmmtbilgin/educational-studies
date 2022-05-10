import axios from "axios";
const state = {
  todos: {},
};

const mutations = {
  setTodoList(currentState, types) {
    currentState.todos = types;
  },
};

const actions = {
  getTodo() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => resolve(response))
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const getters = {
  getTodoList(currentState) {
    return currentState.todos;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
