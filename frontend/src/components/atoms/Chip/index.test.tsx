
import ChipItem from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import theme from '../../../theme';
import React from 'react';

describe('Atoms/ChipItem', () => {
    test('should render rounded light chip', () => {
        render(<ChipItem chipvariant='light' label='24 h' chiptype='rounded'/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    });

    test('should render rounded dark chip', () => {
        render(<ChipItem chipvariant='dark' label='Purchased' chiptype='rounded'/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })

    test('should render square chip unselected', () => {
        render(<ChipItem chiptype='squared' selected={false} label={'Bitcoin'} chipcolor={theme.palette.chipColors.main}/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })

    test('should render square chip selected', () => {
        render(<ChipItem chiptype='squared' selected={true} label={'Bitcoin'} chipcolor={theme.palette.chipColors.main}/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })
})