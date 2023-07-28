import React from "react";
import { Story } from "@storybook/react";
import WalletTotal, { WalletTotalProps } from ".";

export default {
  title: "molecules/WalletTotal",
  component: WalletTotal,
};

const Template: Story<WalletTotalProps> = (args) => <WalletTotal {...args} />;

export const Default = Template.bind({});
Default.args = {
    typographyChildren:"totalBalance",
    value:"$34,000"
  
};
