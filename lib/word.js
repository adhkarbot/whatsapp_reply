const fs = require('fs-extra');
const MenuNmber = require('./MenuNmber.js');

module.exports = {

    async exec({ from, client, body, id }) {

        try {

            let message = 'من فضلك قم بكتابة الرد'
            let word_json = fs.readJsonSync(`./db/word.json`);
            word_json.push(body);
            fs.writeJsonSync(`./db/word.json`, word_json)

            await client.reply(from, message, id).catch((erro) => console.log(erro));

            MenuNmber(from, 2)

        } catch (error) {

            console.log(error);

        }

    }

}