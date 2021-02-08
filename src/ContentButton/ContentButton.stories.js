import { ContentButton } from "./ContentButton";
import { keyIcons } from "../app/content";

export default {
  component: ContentButton,
  title: "ContentButton",
  argTypes: {
    keyName: {
      control: { type: "select", options: Object.keys(keyIcons) },
    },
    onClick: { action: "Clicked" },
  },
};

const Template = (args) => <ContentButton {...args} />;

export const Default = Template.bind({});
Default.args = { keyName: "upButton" };
