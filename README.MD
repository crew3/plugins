# Introduction
Welcome to the Zealy plugins repository. We aim to grow our platform by inviting you, our users, to build and share your own plugins. An plugin is a component used to validate that a quest has been completed. Your contributions are crucial in making Zealy more exciting and versatile, offering new and varied experiences for everyone who uses it.

# What is a Zealy plugin?
A Zealy Integration is configured through a JSON file which includes:
- Name: The integration's name.
- Description: What the integration does.
- Plugin Field: Points to the file containing the function executing the integration. This function take as argument:
 - A context: It's shared across all plugins and it's not configurable.
 - Custom properties: It's specific for each plugin and needs to be validated by the [Zod](https://github.com/colinhacks/zod) schema bellow.
- Validation Field: Points to a file with a Zod schema to validate custom arguments.


The context always contains the following properties:
- zealyId: ID of the user completing the quest.
- communityId: ID of the community where the quest is completed.
- walletAddress: User's EVM wallet address. Can be null if the user didn't connected his wallet.
- twitterId: User's Twitter ID. Can be null. Can be null if the user didn't connected his twitter.
- discordId: User's Discord ID. Can be null. Can be null if the user didn't connected Discord.
