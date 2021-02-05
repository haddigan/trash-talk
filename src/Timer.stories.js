/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Timer } from "./Timer";

export default {
  component: Timer,
  title: "Timer",
};

const Template = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {
  startTime: 3,
};
