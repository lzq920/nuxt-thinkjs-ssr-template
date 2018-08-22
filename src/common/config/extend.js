const view = require("think-view");
const model = require("think-model");
const cache = require("think-cache");
const session = require("think-session");
module.exports = [view, model(think.app), cache, session];
