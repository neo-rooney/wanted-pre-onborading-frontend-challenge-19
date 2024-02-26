// Button.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  test("옳바른 텍스트와 함께 버튼이 랜더링됩니다.", () => {
    render(<Input label="label" />);
    const inputElement = screen.getByText("label");
    expect(inputElement).toBeInTheDocument();
  });

  test("onChange 이벤트 핸들러가 정상 작동합니다.", () => {
    const handleChange = jest.fn();
    render(
      <Input label="label" onChange={handleChange} placeholder="placeholder" />
    );
    const inputElement = screen.getByPlaceholderText("placeholder");

    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
