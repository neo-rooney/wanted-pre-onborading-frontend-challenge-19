import { render } from "@testing-library/react";
import Button from "./Button";

test("Renders the main page", () => {
  render(<Button />);
  expect(true).toBeTruthy();
});
