import Icon from "./Icon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const Bitcoin = Template.bind({});
Bitcoin.args = {
  url: "BitcoinIcon",
};
export const Ethereum = Template.bind({});
Ethereum.args = {
  url: "EthereumIcon",
};
export const Tether = Template.bind({});
Tether.args = {
  url: "TetherIcon",
};
export const Cardano = Template.bind({});
Cardano.args = {
  url: "CardanoIcon",
};
export const XRP = Template.bind({});
XRP.args = {
  url: "XRPIcon",
};
export const Dodge = Template.bind({});
Dodge.args = {
  url: "DodgeIcon",
};