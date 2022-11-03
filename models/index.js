const Author = require("./author.model")
const Book = require("./book.model")
const Borrower = require("./borrower.model")
const Quote = require("./quotes.model")

/******** One-to-One *******/
// who depends on whom? The target depends ond the source

// The target belongs to the source and the source has a target

// A book belongs to borrower
// Book.belongsTo(Borrower, {foreignKey: 'borrower_id'})
// add allowNull: false in the foreignKey (and make the value an object { }) to make the association mandatory
Book.belongsTo(Borrower)

// A borrower has a book
Borrower.hasOne(Book)


/******* one-to-many ******/

// By default the source has many targets and the target belongs to the source
Author.hasMany(Book)
Book.belongsTo(Author)
// Book.belongsTo(Author, {foreignKey: { name: 'author_id'}})



/******** many-to-many *******/

// both sides are sources and targets
// we require a junction or a join table
Book.belongsToMany(Quote, { through: 'Book_Quote'})
Quote.belongsToMany(Book, { through: 'Book_Quote'})

module.exports = { Author, Borrower, Book, Quote}