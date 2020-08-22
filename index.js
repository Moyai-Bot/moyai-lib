"use strict";

const Client = require("./lib/Client");

function Eris(token, options) {
    return new Client(token, options);
}

Eris.Base = require("./lib/structures/Base");
Eris.Bucket = require("./lib/util/Bucket");
Eris.Call = require("./lib/structures/Call");
Eris.CategoryChannel = require("./lib/structures/CategoryChannel");
Eris.Channel = require("./lib/structures/Channel");
Eris.Client = Client;
Eris.Collection = require("./lib/util/Collection");
Eris.Constants = require("./lib/Constants");
Eris.DiscordHTTPError = require("./lib/errors/DiscordHTTPError");
Eris.DiscordRESTError = require("./lib/errors/DiscordRESTError");
Eris.ExtendedUser = require("./lib/structures/ExtendedUser");
Eris.Guild = require("./lib/structures/Guild");
Eris.GuildChannel = require("./lib/structures/GuildChannel");
Eris.Invite = require("./lib/structures/Invite");
Eris.Member = require("./lib/structures/Member");
Eris.Message = require("./lib/structures/Message");
Eris.NewsChannel = require("./lib/structures/NewsChannel");
Eris.Permission = require("./lib/structures/Permission");
Eris.PermissionOverwrite = require("./lib/structures/PermissionOverwrite");
Eris.RequestHandler = require("./lib/rest/RequestHandler");
Eris.Role = require("./lib/structures/Role");
Eris.SequentialBucket = require("./lib/util/SequentialBucket");
Eris.Shard = require("./lib/gateway/Shard");
Eris.SharedStream = require("./lib/voice/SharedStream");
Eris.StoreChannel = require("./lib/structures/StoreChannel");
Eris.TextChannel = require("./lib/structures/TextChannel");
Eris.UnavailableGuild = require("./lib/structures/UnavailableGuild");
Eris.User = require("./lib/structures/User");
Eris.VERSION = require("./package.json").version;
Eris.VoiceChannel = require("./lib/structures/VoiceChannel");
Eris.VoiceConnection = require("./lib/voice/VoiceConnection");
Eris.VoiceConnectionManager = require("./lib/voice/VoiceConnectionManager");
Eris.VoiceState = require("./lib/structures/VoiceState");

module.exports = Eris;