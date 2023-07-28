import React from 'react';
import { render, screen } from '@testing-library/react';
import MyportfolioGraph from './index';
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-apexcharts", () => ({
    __esModule: true,
    default: () => <div />,
}));

describe('MyportfolioGraph', () => {
  it('should render with default props', () => {
    render(<MyportfolioGraph title1="Total Investment" value1="$11,900,204" changePercentage1="-1.2%" />);

    expect(screen.getByText('Total Investment')).toBeInTheDocument();
    expect(screen.getByText('$11,900,204')).toBeInTheDocument();
    expect(screen.getByText('-1.2%')).toBeInTheDocument();
  });

  it('should render with graph and additional props', () => {
    render(
      <MyportfolioGraph
        title1="Total Investment"
        title2="Bitcoin"
        value1="$11,900,204"
        value2="$12,400"
        changePercentage1="-1.2%"
        changePercentage2="+8.2%"
        type="area"
        series={[
          { name: 'Bitcoin', data: [20, 42, 38, 55, 44, 48] },
          { name: 'Total Investment', data: [20, 35, 30, 28, 38, 40] },
        ]}
        showLegend={true}
        legendPosition="top"
        legendHorizontalPosition="right"
        height="100%"
        width="100%"
        colors={['#ffa74f', '#0052ff']}
        strokeCurve="smooth"
        xAxisCategories={['JUN 8', 'JUN 15', 'JUN 22', 'JUN 29', 'JUL 6', 'JUL 13']}
        showXaxis={true}
        showGrid={true}
        showXaxisBorders={true}
      />
    );
    expect(screen.getByText('Total Investment')).toBeInTheDocument();
    expect(screen.getByText('$11,900,204')).toBeInTheDocument();
    expect(screen.getByText('-1.2%')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('$12,400')).toBeInTheDocument();
    expect(screen.getByText('+8.2%')).toBeInTheDocument();
  });
});
