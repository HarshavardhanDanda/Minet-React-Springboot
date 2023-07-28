import React from 'react';
import { render } from '@testing-library/react';
import USD from "../../../../public/assets/Images/coins/USD Coin.svg"
import Deposit from '.';
import "@testing-library/jest-dom";

describe('Deposit component', () => {
  it('renders the component with correct props', () => {
    const src = USD;

    // Render the component
    const { getByTestId, getByText } = render(<Deposit src={USD} />);

    // Assert that the component is rendered
    expect(getByTestId('deposit')).toBeInTheDocument();

    // Assert that the "Deposit to" text is rendered
    expect(getByText('Deposit to')).toBeInTheDocument();

    

    // Assert that the currency text is rendered
    expect(getByText('USD Coin (cash)')).toBeInTheDocument();

    // Assert that the "Default" text is rendered
    expect(getByText('Default')).toBeInTheDocument();
  });
});
