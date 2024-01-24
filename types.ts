export interface PluginContext {
  zealyId: string;
  communityId: string;
  walletAddress?: string;
  twitterId?: string;
  discordId?: string;
  email?: string;
  discordHandle?: string;
  twitterUsername?: string;
}

export interface Response {
  success: boolean;
  message?: string;
}