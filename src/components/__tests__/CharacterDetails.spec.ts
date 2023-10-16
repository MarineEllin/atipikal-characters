import {test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import CharacterDetails from "../../components/CharacterDetails.vue";

test("mount the CharacterDetails component", () => {

    const wrapper = mount(CharacterDetails);
    expect(wrapper.classes()).toContain("detailsContainer");
});