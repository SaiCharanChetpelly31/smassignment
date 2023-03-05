import CardTable from "./CardTable";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Organisam/CardTable",
  component: CardTable,
} as ComponentMeta<typeof CardTable>;

const Template: ComponentStory<typeof CardTable> = (args) => <CardTable/>;
export const Application = Template.bind({});