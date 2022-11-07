const { User, Board, Cheese } = require('../models')
const db = require('./db')

async function seed() {

    // DROP and CREATE all TABLES
    await db.sync({
        force: true
    })

    await User.bulkCreate([{
            name: "Harvey Specter",
            email: "harveyspecter@suits.com"
        },
        {
            name: "Michael Ross",
            email: "michaelross@suits.com"
        },
        {
            name: "Rachel Zane",
            email: "rachelzane@suits.com"
        },
        {
            name: "Louis Litt",
            email: "louislitt@suits.com"
        },
        {
            name: "Donna Paulsen",
            email: "donnapaulsen@suits.com"
        },
        {
            name: "Jessica Pearson",
            email: "jessicapearson@ssuits.com"
        },
    ])

    await Board.bulkCreate([{
            type: " Firm ",
            description: "An aged cheddar or white cheddar is delicious, even a really high-quality Parmigiano-Reggiano can be lovely. Pro tip—pair that Parm with some fancy honey! ",
            rating: 9
        },
        {
            type: "Semi-Firm",
            description: "Manchego, Gruyère or Comté.",
            rating: 6
        },
        {
            type: "Semi-Soft",
            description: " Fontina, muenster or Gouda. ",
            rating: 2
        },
        {
            type: "Soft",
            description: " Brie, camembert, chèvre—anything you can spread works great for this category.",
            rating: 7
        }
    ])
    await Cheese.bulkCreate([{
            name: "Mozzarella",
            description: " Fresh mozzarella is generally white but when seasoned it turns to a light yellow depending on the animal's diet. Due to its high moisture content, it is traditionally served the day after it is made but can be kept in brine for up to a week or longer when sold in vacuum-sealed packages. "
        },
        {
            name: "Mature Cheddar",
            description: "Cheddar cheese (or simply cheddar) is a natural cheese that is relatively hard, off-white (or orange if colourings such as annatto are added), and sometimes sharp-tasting. Cheddar originates from the English village of Cheddar in Somerset."

        },
        {
            name: "Red Leicester",
            description: "Traditionally made wheels are fairly firm and dry, with a friable texture and a slightly sweet, mellow flavour that becomes stronger as the cheese matures."
        },
        {
            name: "Parmesan",
            description: "Parmesan is an Italian hard, granular cheese produced from cows’ milk and aged at least 12 months."
        },
        {
            name: "Brie",
            description: " Brie is a soft cow's-milk cheese named after Brie, the French region from which it originated."
        },

    ])
}

seed()