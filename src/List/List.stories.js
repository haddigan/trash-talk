import React from "react";
import { List } from "./List";
import { contentLists, REACTIONS } from "../content";

export default {
  component: List,
  title: "List",
  argTypes: {
    onSendMessage: {
      action: "Sent message",
    },
  },
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = { content: contentLists[REACTIONS], type: REACTIONS };
