import { NetworkNames } from "@enkryptcom/types";

export interface TokenBalance {
  contract: string;
  balance: string;
}
export interface SupportedNetwork {
  tbName: string;
  tokenurl: string;
  cgPlatform: string;
}
export interface CGToken {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}

export type SupportedNetworkNames =
  | NetworkNames.Binance
  | NetworkNames.Ethereum
  | NetworkNames.Matic;
