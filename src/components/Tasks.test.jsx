import { render, screen } from "@testing-library/react";
import Tasks from "./Tasks";



describe('Tasks component', () => {
  test('correctly renders LIST OF TASKS', async () => {
    const testTasks = [
      {id: 1,
      text: 'Test Task 1'},
      {id: 2,
      text: 'Test Task 2'},
      {id: 3,
      text: 'Test Task 3'},
    ];

    render(<Tasks tasks={testTasks} onAdd={() => {}} onDelete={() => {}} />);

    testTasks.forEach(testTask => {
      expect(screen.getByText(testTask.text)).toBeInTheDocument();
    })

  });
})