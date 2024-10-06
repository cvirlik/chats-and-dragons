import { Bot } from "grammy";
import 'dotenv/config';

const token = process.env.TOKEN
if (!token){
    console.error("No token provided. Set the environment variable 'TOKEN'");
    process.exit(1);
}
const bot = new Bot(token);bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.start();