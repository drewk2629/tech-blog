const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');