import TextingBox from "../../../../src/components/TextingBox";
import { shallowMount } from "@vue/test-utils";

describe("TextingBox", () => {
  const wrapper = shallowMount(TextingBox);
  test("Should render textingbox", () => {
    expect(wrapper.find(".todo-group").exists()).toBe(true);
  });
});
