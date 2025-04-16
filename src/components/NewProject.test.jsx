import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import NewProject from "./NewProject.jsx";

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

describe('NewProject component', () => {
  test('opens new project form when "Create new project" is clicked', async () => {
    render(<NewProject onAdd={() => {}} onCancel={() => {}} />);

    const titleInput = screen.getByLabelText(/title/i);
    expect(titleInput).toBeInTheDocument();
  });

    test('onAdd is called when form is submitted', async () => {
      const handleAddProject = vi.fn();

      render(<NewProject onAdd={handleAddProject} onCancel={() => {}} />);



      const titleInput = screen.getByLabelText(/title/i);
      const descriptionInput = screen.getByLabelText(/description/i);
      const dateInput = screen.getByLabelText(/due date/i);

      await userEvent.type(titleInput, 'My New Project');
      await userEvent.type(descriptionInput, 'This is a description');
      await userEvent.type(dateInput, '2024-04-16');

      const saveButton = screen.getByRole('button', {name: /save/i});
      await saveButton.click();

      expect(handleAddProject).toHaveBeenCalledTimes(1);

      expect(handleAddProject).toHaveBeenCalledWith({
        title: 'My New Project',
        description: 'This is a description',
        dueDate: '2024-04-16',
      });

    });


})