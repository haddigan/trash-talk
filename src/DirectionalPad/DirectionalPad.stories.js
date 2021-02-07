import React from "react";
import { DirectionalPad } from "./DirectionalPad";

export default {
  component: DirectionalPad,
  title: "DirectionalPad",
};

const Template = (args) => <DirectionalPad {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <div>Top</div>,
    <div>Left</div>,
    <div>Right</div>,
    <div>Bottom</div>,
  ],
};
