import { type PluginContext, type Response } from "../../types";
import { type validator } from "./validator";
import { z } from 'zod'

type CustomArgs = z.infer<typeof validator>

// pseudo-code
export const plugin = async ({ twitterUsername} : PluginContext, {string }: CustomArgs) : Promise<Response> => {

  const isContaining = twitterUsername?.includes(string)
  
  if (isContaining) {
    return {
      success: true,
      message: 'Username contains the specified string.'
    }
  } else {
    return {
      success: false,
      message: 'Username does not contain the specified string.'
    }
  }
}