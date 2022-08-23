const { Voice, LoadCommands, AoiClient } = require("aoi.js");
const config = require("./config.json");

const bot = new AoiClient({
  token: config.token,
  prefix: [config.prefix, "$getServerVar[prefix]"],
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
  database: {
    db: require("aoi.db"),
    type: "aoi.db",
    path: "./database/",
    tables: ["main"],
    extraOptions: {
      dbType: "KeyValue",
    },
},
});

// Loader setup

const loader = new LoadCommands(bot);

// Voice setup

const voice = new Voice(
  bot,
  {
    cache: {
      cacheType: "Memory",
      enabled: true,
    },
  },
  true, 
);

// Panel setup

const { Panel } = require("@akarui/aoi.panel")

const panel = new Panel({
    username: config["panel-username"],
    password: config["panel-password"],
    secret: config["panel-secret"],
    port: config["panel-port"],
    bot: bot,
    mainFile: "index.js",
    commands: "commands"
})

// Events

bot.onMessage();
bot.onInteractionCreate();
voice.onTrackStart();
panel.loadPanel()
panel.onError()

// Variable setup

bot.variables(require("./util/variables.js"));

// Status setup

bot.status(require("./util/status.js"));

// Command Loader 

loader.load(bot.cmd, "./commands/"); //bot cmds
loader.load(voice.cmd, "./commands/voice/"); //voice cmds