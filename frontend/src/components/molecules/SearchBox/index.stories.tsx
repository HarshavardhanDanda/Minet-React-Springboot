import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";
import SearchBox from ".";


const meta: Meta<typeof SearchBox> = {
  title: "molecules/searchbox",
  component: SearchBox,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof SearchBox>;

const FunctionalSearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <SearchBox
      value={searchValue}
      onChange={(eve) => {
        setSearchValue(eve.target.value);
      }}
      onCloseAction={() => {
        setSearchValue("");
      }}
    />
  );
};

export const defaultSearchBox: story = {
  render: () => {
    return <FunctionalSearchBox />;
  },
};
