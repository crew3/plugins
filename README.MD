# Introduction
Welcome to the Zealy plugins repository. We aim to grow our platform by inviting you, our users, to build and share your own plugins. A plugin is a component used to validate that a quest has been completed. Your contributions are crucial in making Zealy more exciting and versatile, offering new and varied experiences for everyone who uses it.

# What is a Zealy plugin?
A Zealy plugin is configured through a JSON file which includes:

- Name: The plugin's name.
- Description: What the plugin does.
- Plugin Field: Points to the file containing the function executing the plugin. This function takes as arguments:
- A context: Shared across all plugins and it's not configurable.
- Custom properties: Specific to each plugin and needs to be validated by the Zod schema below.
- Validation Field: Points to a file with a Zod schema to validate custom arguments.


The context always contains the following properties:
- zealyId: ID of the user completing the quest.
- communityId: ID of the community where the quest is completed.
- walletAddress: User's EVM wallet address. Can be null if the user hasn't connected their wallet.
- twitterId: User's Twitter ID. Can be null if the user hasn't connected their Twitter.
- discordId: User's Discord ID. Can be null if the user hasn't connected to Discord.


A plugin function should return an object containing:
- A boolean success property.
- A message, in case of an error, that will be display to the user.

You can find an example of a plugin in `./plugins/example`

# Submitting Your Plugin
To submit your plugin, create a pull request (PR) in the repository with the following structure:

- New Plugin Folder: Your PR should include a new folder within the plugins directory. This folder should be named after your plugin.
- Folder Contents: The folder should contain:
 - config.ts: The configuration file for your plugin.
 - plugin.ts: The main plugin function file.
 - validator.ts: The Zod validation schema file.

If your plugin requires additional npm packages, you can add them in the root package.json.

In your PR description, provide context about your plugin, explaining its purpose and functionality. This context helps the review team understand what your plugin does and the problem it solves.



# Review Process
Once your PR is open, the Zealy team will review the plugin. The process might involve:
- Code review for quality and adherence to standards
- Testing the plugin for functionality and reliability
- Feedback and possibly requesting changes

Once the plugin is merged into the repo, the Zealy team will integrate it into the product as a new type of quest within 1 week.

# Support
If you have any questions or face issues, feel free to open an issue in the repository, and we will assist you.
