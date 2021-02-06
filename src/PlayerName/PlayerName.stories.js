import React from "react";
import { PlayerName } from "./PlayerName";

export default {
  component: PlayerName,
  title: "PlayerName",
  argTypes: {
    handleSetName: { action: "Saved name" },
  },
};

const Template = (args) => <PlayerName {...args} />;

export const Default = Template.bind({});
