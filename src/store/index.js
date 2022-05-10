import Vue from "vue";
import Vuex from "vuex";

import homepage from "./modules/homepage";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations,
  actions,
  getters,
  modules: {
    homepage,
  },
  //plugins: [createPersistedState()]
});
