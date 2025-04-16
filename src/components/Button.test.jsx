import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe('Button component', () => {
  test('renders CORRECT LABEL', () => {
    render(<Button>Click me!</Button>);

    const buttonElement = screen.getByText('Click me!');
    expect(buttonElement).toBeInTheDocument();
  });
})