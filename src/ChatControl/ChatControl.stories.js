import React from "react";
import { ChatControl } from "./ChatControl";

export default {
  component: ChatControl,
  title: "ChatControl",
  argTypes: {
    onSendMessage: { action: "Sent message" },
  },
};

const Template = (args) => <ChatControl {...args} />;

export const Default = Template.bind({});
