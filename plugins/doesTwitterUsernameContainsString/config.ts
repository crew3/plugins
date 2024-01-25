import { validator } from "./validator"
import { plugin } from './plugin'

export const doesTwitterUsernameContainsString = {
  "name": "doesTwitterUsernameContainsString",
  "description": "This plugin checks if the username contains the specified letters.",
  "validator": validator,
  "plugin": plugin
}