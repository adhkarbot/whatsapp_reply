const { db } = require('./db.js');


module.exports = async function MenuNmber(from, number) {

    try {

        db.push({ [from]: { "menu_name": number }})

    } catch (error) {

        console.log(error);

    }

}