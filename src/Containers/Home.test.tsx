import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home.js", () => {
	test("should render <Home/> with description and image", () => {
		const { getByText, getByAltText } = render(<Home />);
		const description: string = "Summarised Reports at your fingertips.";
		const logo = getByAltText("LOGO");
		const register = getByText("REGISTER");
		const login = getByText("LOGIN");
		const homeDescription = getByText(description);
		expect(logo).toBeInTheDocument();
		expect(register).toBeInTheDocument();
		expect(login).toBeInTheDocument();
		expect(homeDescription).toBeInTheDocument();
	});
});
