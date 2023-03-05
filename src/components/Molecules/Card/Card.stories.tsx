import Card from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Molecules/Card",
  component: Card,
  argTypes: {
    handleClick: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Bitcoin = Template.bind({});
Bitcoin.args = {
  id: 1,
  iconURL: "BitcoinIcon",
  cryptoName: "Bitcoin",
  abbr: "BTC",
  price: "$3,285,553.75",
  change: "+1.06%",
  marketCap: "$60.1T",
  isWatchlisted: false,
};
export const Ethereum = Template.bind({});
Ethereum.args = {
  id: 2,
  iconURL: "EthereumIcon",
  cryptoName: "Ethereum",
  abbr: "ETH",
  price: "$216,678,10",
  change: "-5.49%",
  marketCap: "$25.4T",
  isWatchlisted: false,
};
export const Tether = Template.bind({});
Tether.args = {
  id: 3,
  iconURL: "TetherIcon",
  cryptoName: "Tether",
  abbr: "USDT",
  price: "$74.31",
  change: "+0.11%",
  marketCap: "$4.6T",
  isWatchlisted: false,
};
export const Cardano = Template.bind({});
Cardano.args = {
  id: 4,
  iconURL: "CardanoIcon",
  cryptoName: "Cardano",
  abbr: "ADA",
  price: "$104.52",
  change: "-1.82%",
  marketCap: "$3.4T",
  isWatchlisted: false,
};
export const XRP = Template.bind({});
XRP.args = {
  id: 5,
  iconURL: "XRPIcon",
  cryptoName: "XRP",
  abbr: "XRP",
  price: "$57.21",
  change: "+1.11%",
  marketCap: "$2.7T",
  isWatchlisted: false,
};
export const Dodge = Template.bind({});
Dodge.args = {
  id: 6,
  iconURL: "DodgeIcon",
  cryptoName: "Dodge",
  abbr: "XRP",
  price: "$17.64",
  change: "-6.96%",
  marketCap: "$2.3T",
  isWatchlisted: false,
};
