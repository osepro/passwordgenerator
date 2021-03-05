import React from "react";
import { mount } from "enzyme";
import App from "../../App";
import Main from "components/Main";

let wrapped;

beforeEach(() => {
	wrapped = mount(<App />);
});

afterEach(() => {
	wrapped.unmount();
});

it("contains all components", () => {
	expect(wrapped).toMatchSnapshot();
});
it("shows Main component", () => {
	expect(wrapped.find(Main).length).toEqual(1);
});
