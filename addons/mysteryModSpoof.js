export default function inject(bot, options) {
    bot.on('misc:mysteryMod->mysterymod_user_check', bot.mysteryMod.sendPayload)
}
