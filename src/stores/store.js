import { defineStore } from "pinia";
import { uid } from "quasar";

export const useListStore = defineStore("list", {
  state: () => ({
    tasks: {
      id1: {
        name: "go to shop",
        completed: false,
        duedate: "2023/05/06",
        duetime: "5:11",
      },
      id2: {
        name: "buy chocolate",
        completed: true,
        duedate: "2023/03/05",
        duetime: "5:11",
      },
      id3: {
        name: "learn quasar",
        completed: false,
        duedate: "2024/05/03",
        duetime: "5:11",
      },
    },
  }),

  actions: {
    checkbox(id, update) {
      this.tasks[id].completed = update.completed;
    },
    update(id, update) {
      if (update.duetime === "") {
        update.duetime = "N/A";
      }
      this.tasks[id].name = update.name;
      this.tasks[id].duedate = update.duedate;
      this.tasks[id].duetime = update.duetime;
    },
    Delete(id) {
      delete this.tasks[id];
    },
    Add(new_task) {
      const id = uid();
      if (new_task.duetime === "") {
        new_task.duetime = "N/A";
      }
      this.tasks[id] = new_task;
    },
  },
  getters: {
    lists: (state) => {
      let tasks = {};
      return state.tasks;
    },
  },
});
