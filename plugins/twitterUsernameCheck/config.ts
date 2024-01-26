import { validator } from "./validator"
import { plugin } from './plugin'

export const twitterUsernameCheck = {
  "name": "twitterUsernameCheck",
  "description": "This plugin checks if the username contains the specified letters.",
  "validator": validator,
  "plugin": plugin
}