import React from "react";
import { mount } from "enzyme";
import App from "App";
import Main from "components/Main";

it("contains the main components", () => {
	const wrapped = mount(<App />);
	expect(wrapped.find(Main).length).toEqual(1);
});
