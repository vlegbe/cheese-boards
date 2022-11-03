const {Author, Book, Quote, Borrower} = require('../models')
const db = require('../db/db')

async function main() {

    /**** one-to-one trials ****/

    // Book borrowed by Borrower with id 1
    const borrower1 = await Borrower.findByPk(1)
    // console.log(borrower1)
    // console.log((await borrower1.getBook()).toJSON())

    const borrowers = await Borrower.findAll()
    // console.log(borrowers[0].toJSON())

    const book1 = await Book.findByPk(2)
    // console.log(book1.toJSON().title)
    // console.log((await book1.setBorrower(borrowers[3])).toJSON())

    const book = await Book.create({
        title: 'The Republic'
    })

    const borrower = await Borrower.create({
        name: 'Plato'
    })

    await book.setBorrower(borrower)

    /************** one-to-many *************/
    const author1 = await Author.findByPk(5)
    console.table((await author1.getBooks()).map(b => b.toJSON()))

    // note the plural of countBooks
    console.log( `Total books: ${await author1.countBooks()}`)

    // using the above defined book1 to check (note the singular)
    console.log(await author1.hasBook(book1))


    /**************** many-to-many *****************/
    let books = await Book.findAll()
    const quotes = await Quote.findAll()
    // console.table(books.map(a => a.toJSON()))
    await books[0].addQuote(quotes[0])
    await books[0].addQuote(quotes[1])
    
    books = await Book.findAll()

    console.table((await books[0].getQuotes()).map(ch => ch.toJSON()))

    console.log(await books[0].removeQuote(quotes[1]))

}

main()