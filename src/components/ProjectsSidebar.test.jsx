import { render, screen } from "@testing-library/react";
import ProjectsSidebar from "./ProjectsSidebar";

test('renders YOUR PROJECTS', () => {
    render(<ProjectsSidebar projects={[]}/>);
    const h2elem = screen.getByText('Your Projects');
    expect(h2elem).toBeInTheDocument();
});