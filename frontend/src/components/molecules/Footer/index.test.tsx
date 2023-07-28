
import Footer from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';

describe('Molecules/Footer', () => {
    test('should Renders footer correctly', () => {
        render(<Footer />);
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    })
    it('should displays the correct text content', () => {
        render(<Footer />);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Careers')).toBeInTheDocument();
        expect(screen.getByText('Legal & Privacy')).toBeInTheDocument();
        expect(screen.getByText('© 2021 Minet')).toBeInTheDocument();
        expect(screen.getByText('NEED HELP')).toBeInTheDocument();
      });
})