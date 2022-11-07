const { User, Board, Cheese } = require('./index.js')
const db = require('../db')
const { describe } = require('node:test')


describe('User, Board, Cheese ', () => {
    // A board can be loaded with its cheeses
    // A user can be loaded with its boards - User-Board Relationship
    //User Created
    // A cheese can be loaded with its board data (by user)

    test('a new user can be created', async() => {
        const user1 = await User.create({
                name: 'name1',
                email: 'email1@email.com'
            })
            //board can be assigned to user(s)
        const board1 = await Board.create({
            type: 'Cheese Board',
            description: 'Variety of firm cheeses',
            rating: 9
        })

        await user1.addBoard(board1)
        const userBoard = await user1.getBoards()
        expect(userBoard[0].id).toEqual(board1.id)
        await user1.destroy()
        await board1.destroy()
    })
})