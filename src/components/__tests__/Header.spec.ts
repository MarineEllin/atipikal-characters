import {test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import Header from "../../components/Header.vue";

test("mount the Header component", () => {
    const wrapper = mount(Header);

    expect(wrapper.html()).toContain("Atipikal Characters");


});