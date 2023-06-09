import { defineStore } from "pinia";
import { setCookies, certCookies } from "@/plugins/cookies";
import * as s$todo from "@/services/todo";

const d$todo = defineStore({
  id: "todo",
  state: () => ({
    list: [],
  }),
  actions: {
    async a$list() {
      try {
        const { data } = await s$todo.list();
        this.list = data;
      } catch ({ error, message }) {
        this.list = [];
        throw message ?? error;
      }
    },
    async a$add(body) {
      try {
        await s$todo.login(body);
      } catch ({ error, message }) {
        throw message ?? error;
      }
    },
    async a$register(body) {
      try {
        await s$todo.register(body);
      } catch ({ error, message }) {
        throw message ?? error;
      }
    },
  },
  getters: {
    g$list: ({ list }) => list,
  },
});

export default d$todo;
