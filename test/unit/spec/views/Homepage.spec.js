import Homepage from "../../../../src/views/Homepage.vue";
import { shallowMount } from "@vue/test-utils";

describe("Homepage", () => {
  const wrapper = shallowMount(Homepage);
  test("Should render homepage", () => {
    expect(wrapper.find(".todo-group").exists()).toBe(true);
  });
});
