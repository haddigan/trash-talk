/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { App } from "./App";

export default {
  component: App,
  title: "App",
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
