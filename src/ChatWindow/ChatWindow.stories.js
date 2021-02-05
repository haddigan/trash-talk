import React from "react";
import { ChatWindow } from "./ChatWindow";

export default {
  component: ChatWindow,
  title: "ChatWindow",
};

const longArray = Array(20).fill(null);
const longContent = longArray.map((x, i) => ({
  id: i,
  name: "Player One",
  text: "What a save!",
}));

const Template = (args) => <ChatWindow {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: [longContent[0]],
};

export const ScrollingOverflow = Template.bind({});
ScrollingOverflow.args = {
  content: longContent,
};

export const Empty = Template.bind({});
Empty.args = {
  content: undefined,
};

export const StatusMessage = Template.bind({});
StatusMessage.args = {
  content: [
    ...longContent.slice(0, 3),
    {
      id: 99,
      text: "Chat disabled for 4 seconds",
      isStatusMessage: true,
    },
    {
      id: 98,
      text: "So and so has left the match",
      isStatusMessage: true,
    },
  ],
};
