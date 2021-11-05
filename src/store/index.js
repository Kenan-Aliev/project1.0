import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import smartphones from "./smartphones";



export default store(function (/* { ssrContext } */) {
export default store(function () {
  const Store = createStore({
    modules: {
      smartphones,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
