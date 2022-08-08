import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test - the baseline to verify that the component is rendering
  it("renders", () => {
    render(<Nav />);
  });

  // snapshot text
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

// test to verify camera emoji is visible - the describe function isn't necessary, but is used to stay organized
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // arrange - arrange the parts of the component that we'll need to access
    const { getByLabelText } = render(<Nav />);
    // assert -  test the emoji's accessibility features
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

// test for link visibility - verify that the text content is being inserted into the <a> tags (i.e., that the links are visible to users)
describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
