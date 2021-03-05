import React from "react";
import { mount } from "enzyme";
import UserInput from "components/UserInput";

describe("User componet test", () => {
	let wrapped;

	beforeEach(() => {
		wrapped = mount(<UserInput />);
	});

	afterEach(() => {
		wrapped.unmount();
	});

	it("shows Main component", () => {
		expect(wrapped.find("input").length).toEqual(2);
		expect(wrapped.find("button").length).toEqual(1);
	});

	it("change input box items", () => {
		//const changeItem = jest.fn();
		//wrapped.find("input").simulate("change");
		//expect(changeItem).toHaveBeenCalled();
	});
});
