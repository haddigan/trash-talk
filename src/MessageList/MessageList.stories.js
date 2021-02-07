import React from "react";
import { MessageList } from "./MessageList";
import { contentLists, REACTIONS } from "../content";

export default {
  component: MessageList,
  title: "MessageList",
  argTypes: {
    onSendMessage: {
      action: "Sent message",
    },
  },
};

const Template = (args) => <MessageList {...args} />;

export const Default = Template.bind({});
Default.args = { content: contentLists[REACTIONS], type: REACTIONS };
