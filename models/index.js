const Board = require("./board.model")
const Cheese = require("./cheese.model")
const User = require("./user.model")


/******** One-to-One *******/
// who depends on whom? The target depends ond the source

// The target belongs to the source and the source has a target

// Cheese belongs to User
// Cheese.belongsTo(User, {foreignKey: 'usee_id'})
// Cheese.belongsTo(User, {foreignKey: { name: 'user_id'}})
// add allowNull: false in the foreignKey (and make the value an object { }) to make the association mandatory
Cheese.belongsTo(User)

// A User has a cheese
// User.hasOne(Cheese, {foreignKey: 'user_id'})
User.hasOne(Cheese)


/******* one-to-many ******/

// By default the source has many targets and the target belongs to the source
User.hasMany(Board)
Board.hasMany(Cheese)
Board.belongsTo(User)
    // Book.belongsTo(Board, {foreignKey: { name: 'Board_id'}})


/******** many-to-many *******/

// both sides are sources and targets
// we require a junction or a join table
Board.belongsToMany(Cheese, { through: "Board_Cheese" })
Cheese.belongsToMany(Board, { through: "Board_Cheese" })

module.exports = { User, Board, Cheese, }