import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../App";

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

describe('NewProject component', () => {
  test('opens new project form when "Create new project" is clicked', async () => {
    render(<App />);

    const createButton = screen.getByRole('button', { name: /create new project/i });
    await userEvent.click(createButton);

    const titleInput = screen.getByLabelText(/title/i);
    expect(titleInput).toBeInTheDocument();
  });
})