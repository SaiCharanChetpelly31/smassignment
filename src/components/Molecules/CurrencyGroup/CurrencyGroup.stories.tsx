import CurrencyGroup from "./CurrencyGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Molecules/CurrencyGroup",
    component: CurrencyGroup,
  } as ComponentMeta<typeof CurrencyGroup>
  
const Template: ComponentStory<typeof CurrencyGroup> = (args) => <CurrencyGroup {...args} />;
export const Bitcoin = Template.bind({});
Bitcoin.args = {
    iconURL:"BitcoinIcon",
    cryptoName:"Bitcoin",
    abbr:"BTC",
}
export const Ethereum = Template.bind({});
Ethereum.args = {
    iconURL:"EthereumIcon",
    cryptoName:"Ethereum",
    abbr:"ETH",
};
export const Tether = Template.bind({});
Tether.args = {
    iconURL:"TetherIcon",
    cryptoName:"Tether",
    abbr:"USDT",
};
export const Cardano = Template.bind({});
Cardano.args = {
    iconURL:"CardanoIcon",
    cryptoName:"Cardano",
    abbr:"ADA",
};
export const XRP = Template.bind({});
XRP.args = {
    iconURL:"XRPIcon",
    cryptoName:"XRP",
    abbr:"XRP"
};
export const Dodge = Template.bind({});
Dodge.args = {
    iconURL:"DodgeIcon",
    cryptoName:"Dodge",
    abbr:"XRP",
}; 