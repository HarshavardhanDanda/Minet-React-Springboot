import { ComponentStory } from "@storybook/react";
import React from "react";
import ChooseCurrency from ".";

export default {
  title: "organisms/ChooseCrypto",
  component: ChooseCurrency,
};

const Template: ComponentStory<typeof ChooseCurrency> = (args) => (
  <div >
    <ChooseCurrency {...args} />
  </div>
);

export const primary = Template.bind({})
primary.args={
    coinId:"ethereum"

}