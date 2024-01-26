import { type PluginContext, type Response } from "../../types";
import { type validator } from "./validator";
import { z } from 'zod'
import { ethers } from 'ethers'

type CustomArgs = z.infer<typeof validator>

const ERC20_ABI = [
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  }
];

const polygonRpcUrl = 'https://polygon-rpc.com/';

export const plugin =  async ({ walletAddress } : PluginContext, { expectedAmount  }: CustomArgs) : Promise<Response> => {
  if (!walletAddress) return {
    success: false,
    message: 'No wallet address provided'
  }
  const provider = new ethers.JsonRpcProvider(polygonRpcUrl);
  const balance = await provider.getBalance(walletAddress);
  const formattedBalance = ethers.formatEther(balance);
  
  return Number(formattedBalance) >= expectedAmount ? { success: true } : { success: false, message: 'Insufficient MATIC' };
};