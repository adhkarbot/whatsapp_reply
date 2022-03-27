const MenuNmber = require('./MenuNmber.js');
const { db } = require('./db.js');

module.exports = async function getMenu(from) {

    try {

        if (db[from] !== undefined) {

            return db[from].menu_name;

        }

        else {

            MenuNmber(from, 0);
            return 0
        }


    } catch (error) {

        console.log(error);

    }

}