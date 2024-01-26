import { type PluginContext, type Response } from "../../types";
import { type validator } from "./validator";
import { z } from 'zod'

type CustomArgs = z.infer<typeof validator>

// pseudo-code
export const plugin = async (context : PluginContext, {odds}: CustomArgs) : Promise<Response> => {
  // generate a number between 0 and 1, return true if the number is less than the odds
  const random = Math.random()

  if (random < odds) {
    return {
      success: true,
      message: 'You won the lottery!'
    }
  } else {
    return {
      success: false,
      message: 'You lost the lottery!'
    }
  }
}