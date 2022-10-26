const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model");
db.role = require("./role.model");
db.researchform = require("./research-form.model");

db.ROLES = ["user", "admin", "moderator"];
db.sections = [
    "pre_interview", "interview", "post_interview", "header", "notes", "extras"
];

module.exports = db;