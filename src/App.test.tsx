import React from 'react';
import { render, screen } from '@testing-library/react';
import Particles from "react-particles";

test('renders learn react link', () => {
    render(<Particles/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});