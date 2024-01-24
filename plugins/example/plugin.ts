import { PluginContext, Response } from "../../types";
import { validator } from "./validator";
import { z } from 'zod'
import { ethers } from 'ethers';

type CustomArgs = z.infer<typeof validator>

// pseudo-code
const plugin = async ({walletAddress}: PluginContext, {rpcUrl, nftContractAddress, tokenId}: CustomArgs) : Promise<Response> => {
  try {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(nftContractAddress, ERC721ABI, provider);

    const owner = await contract.ownerOf(tokenId);
    const isOwner = owner.toLowerCase() === walletAddress?.toLowerCase();
    return {
      success: isOwner,
      ...(isOwner ? {} : { message: 'You do not own this NFT' })
    }
  } catch (error) {
    return {
      success: false,
      message: JSON.stringify(error)
    }
  }
}

export default plugin

// ERC-721 ABI with only the necessary 'ownerOf' method
const ERC721ABI = [
  {
    constant: true,
    inputs: [{ name: '_tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', type: 'address' }],
    type: 'function',
  },
];