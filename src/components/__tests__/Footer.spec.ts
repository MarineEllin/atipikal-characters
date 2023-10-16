import {test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import Footer from "../../components/Footer.vue";

test("mount the Footer component", () => {
    const wrapper = mount(Footer);

    expect(wrapper.html()).toContain("Atipikal Characters");


});