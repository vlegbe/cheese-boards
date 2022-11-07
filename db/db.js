const { Sequelize } = require('sequelize')
const path = require('path')
const sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
})

{ sequelize: db }

module.exports = { db }

module.exports = { User, Board, Cheese }