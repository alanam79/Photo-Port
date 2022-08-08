import React from "react";
// render will "render" the component.
// cleanup is used to remove components from the DOM to prevent memory leaking, as well as variable or
// data collisions between tests that could corrupt test results
import { render, cleanup } from "@testing-library/react";
//  import the extend-expect library from the jest-dom package
// jest-dom offers access to custom matchers that are used to test DOM element
import "@testing-library/jest-dom/extend-expect";
// import the component we will be testing
import About from "..";

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.

afterEach(cleanup);

// function to declare the component we're testing
// the first argument (about component), a string declares what is being tested. In the second argument, (), a callback function runs the test.
describe("About component", () => {
  //renders About test
  // First Test - the baseline to verify that the component is rendering
  it("renders", () => {
    render(<About />);
  });
  // Second Test - A new snapshot can be written at the command line that contains the instance of the test runner by typing u to update, or rewrite, a new snapshot.
  it("matches snapshot DOM node structure", () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
