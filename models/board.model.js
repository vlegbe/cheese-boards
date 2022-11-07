const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Author extends Model {}

Author.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize: db
})

module.exports = Author