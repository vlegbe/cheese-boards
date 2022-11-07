const { User, Board, Cheese } = require('../models')
const db = require('../db/db')

async function main() {

    /**** one-to-one trials ****/

    // Cheese picked by User with id 1
    const user1 = await User.findByPk(1)
        // console.log(user1)
        // console.log((await user.getCheese)).toJSON())

    const users = await User.findAll()
        // console.log(users[0].toJSON())

    const book1 = await Book.findByPk(2)
        // console.log(cheese1.toJSON().title)
        // console.log((await book1.setUser(users[3])).toJSON())

    const cheese = await cheese.create({
        title: 'Brie'
    })

    const user = await user.create({
        name: 'Harvey Specter'
    })

    await cheese.setUser(user)

    /************** one-to-many *************/
    const User1 = await User1findByPk(5)
    console.table((await User1.getBooks()).map(b => b.toJSON()))

    // note the plural of countBooks
    console.log(`Total cheese: ${await author1.countCheese()}`)

    // using the above defined book1 to check (note the singular)
    console.log(await author1.hasCheese(cheese1))


    /**************** many-to-many *****************/
    let cheeses = await Cheese.findAll()
        // console.table(books.map(a => a.toJSON()))
    await cheeses[0].addUser(quotes[0])
    await cheeses[0].addUser(quotes[1])

    cheeses = await Cheese.findAll()

    console.table((await cheeses[0].getCheese()).map(ch => ch.toJSON()))

    console.log(await cheeses[0].removeCheese(cheeses[1]))

}

main()