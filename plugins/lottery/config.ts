import { validator } from "./validator"
import { plugin } from './plugin'

export const hasStakeToken = {
  "name": "hasStakeToken",
  "description": "This plugin checks if the username contains the specified letters.",
  "validator": validator,
  "plugin": plugin
}