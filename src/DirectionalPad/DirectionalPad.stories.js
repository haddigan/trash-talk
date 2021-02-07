import React from "react";
import { DirectionalPad } from "./DirectionalPad";

export default {
  component: DirectionalPad,
  title: "DirectionalPad",
};

const Template = (args) => <DirectionalPad {...args} />;

export const Default = Template.bind({});
Default.args = {
  upButton: <div>Top</div>,
  leftButton: <div>Left</div>,
  rightButton: <div>Right</div>,
  downButton: <div>Bottom</div>,
};
