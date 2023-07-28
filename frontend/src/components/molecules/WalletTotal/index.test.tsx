import { render, waitFor } from "@testing-library/react";
import React from "react";
import WalletTotal from ".";
import "@testing-library/jest-dom/extend-expect";

describe("WalletTotal component", () => {
  test("Should renders typography and value correctly", () => {
    const typographyChildren = "Total Wallet";
    const value = "$1000";
    const justifyContent = "space-between";

    const { getByText } = render(
      <WalletTotal
        typographyChildren={typographyChildren}
        value={value}
        justifyContent={justifyContent}
      />
    );

    const typographyElement = getByText(typographyChildren);
    const valueElement = getByText(value);

    expect(typographyElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

});
