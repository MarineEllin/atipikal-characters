import {test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import Homepage from "../../components/Homepage.vue";

test("mount the homepage component", () => {
    const wrapper = mount(Homepage);
    expect(wrapper.isVisible);
});
