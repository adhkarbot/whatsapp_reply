const fs = require('fs-extra');
const MenuNmber = require('./MenuNmber.js');

module.exports = async function getMenu(from) {

    try {

        let db_menu = await fs.readJson('./db/Menu.json');

        if (Object.keys(db_menu).includes(from)) {

            return db_menu[from].menu_name;

        }

        else {

            MenuNmber(from, 0);
            return 0
        }


    } catch (error) {

        console.log(error);

    }

}