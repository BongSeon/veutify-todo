import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        done: false,
      },
      {
        id: 2,
        title: "Get bananas",
        done: false,
      },
      {
        id: 3,
        title: "Eats bananas",
        done: false,
      },
    ],
    snackbar: {
      show: false,
      text: 'Hey mother flipper!'
    },
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      };
      state.tasks.push(newTask);
      state.snackbar.show = true;
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state, text) {
      state.snackbar.text = text
      state.snackbar.show = true
    },
    closeSnackbar(state) {
      state.snackbar.show = false
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar','Task Added.')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task Deleted.')
    }
  },
  getters: {
  }
})
