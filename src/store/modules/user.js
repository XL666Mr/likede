import { login } from "@/api/user";
import { Message } from "element-ui";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    clientToken: "",
    token: "",
  },
  mutations: {
    setclientToken(state, payload) {
      state.clientToken = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async getLoginList(context, ruleForm) {
      try {
        const res = await login(context.state.clientToken, ruleForm);
        console.log(res);
        if (res.data.token) {
          context.commit("setToken", res.data.token);
          router.push("/");
        } else {
          Message.error(res.data.msg);
        }
      } catch (error) {
        console.log(error);
      }
    },
    getclientToken(context, payload) {
      context.commit("setclientToken", payload);
    },
  },
};
