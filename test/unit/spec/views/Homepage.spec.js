import Homepage from "../../../../src/views/Homepage.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);
const homepage = {
  getters: {
    getTodoList: jest.fn(() => Promise.resolve())
  },
  actions: {
    getTodo: () => {}
  },
  namespaced: true
};
const store = new Vuex.Store({
  modules: { homepage }
});
describe("Homepage", () => {
  const wrapper = shallowMount(Homepage, {
    localVue,
    store
  });
  it("Should render TextingBox", () => {
    expect(wrapper.findComponent({ name: "TextingBox" }).exists()).toBe(true);
  });
});
