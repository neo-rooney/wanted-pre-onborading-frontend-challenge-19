import { render, screen, fireEvent } from "@testing-library/react";
import ListItem from "./ListItem";

describe("ListItem Component", () => {
  test("컴포넌트 렌더링 테스트", () => {
    render(<ListItem text="Test Item" onClickDelete={() => {}} />);
    const listItemElement = screen.getByText("Test Item");
    expect(listItemElement).toBeInTheDocument();
  });

  test("텍스트 표시 테스트", () => {
    render(<ListItem text="Test Item" onClickDelete={() => {}} />);
    expect(screen.getByText("Test Item")).toBeInTheDocument();
  });

  test("삭제 버튼 클릭 이벤트 테스트", () => {
    const mockOnClickDelete = jest.fn();
    render(<ListItem text="Test Item" onClickDelete={mockOnClickDelete} />);
    const buttonElement = screen.getByRole("button", { name: /삭제/i });
    fireEvent.click(buttonElement);
    expect(mockOnClickDelete).toHaveBeenCalledTimes(1);
  });
});
