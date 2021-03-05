import React from "react";
import { mount } from "enzyme";
import Main from "components/Main";
import UserInput from "components/UserInput";

let wrapped;

beforeEach(() => {
	wrapped = mount(<Main />);
});

afterEach(() => {
	wrapped.unmount();
});

it("shows Main component", () => {
	expect(wrapped.find("h1").text()).toEqual("Password Generator");
	expect(wrapped.find(UserInput).length).toEqual(1);
});
