import { validator } from "./validator"
import { plugin } from './plugin'

export const doesHoldMatics = {
  "name": "doesHoldMatics",
  "description": "This plugin checks if the user hold the specified amount of matic.",
  "validator": validator,
  "plugin": plugin
}