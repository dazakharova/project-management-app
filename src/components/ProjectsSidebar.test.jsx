import { render, screen } from "@testing-library/react";
import ProjectsSidebar from "./ProjectsSidebar";

describe('ProjectSidebar component', () => {
    test('renders YOUR PROJECTS', () => {
        render(<ProjectsSidebar projects={[]}/>);
        const h2elem = screen.getByText('Your Projects');
        expect(h2elem).toBeInTheDocument();
    });

    test('renders YOUR PROJECTS TITLES', () => {
        const testProjects = [
            {id: 1,
            title: 'Project 1'},
            {id: 2,
            title: 'Project 2'},
            {id: 3,
            title: 'Project 3'},
        ]

        render(<ProjectsSidebar projects={testProjects} />);

        testProjects.forEach(project => {
            expect(screen.getByText(project.title)).toBeInTheDocument();
        })
    })
})