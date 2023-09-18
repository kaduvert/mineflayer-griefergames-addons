const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process')

module.exports = function inject(bot, options) {
	const rl = readline.createInterface({ input, output })
	rl.on('line', bot.chat.send)
}
