const fs = require('fs-extra');
const MenuNmber = require('./MenuNmber.js');

module.exports = {

    async exec({ from, client, body, id }) {

        try {

            let message = 'تم إضافة الكلمة والرد بنجاح ✅'
            let word_json = fs.readJsonSync(`./db/word.json`);
            let reply_json = fs.readJsonSync(`./db/reply.json`);
            let word = word_json[0]
            reply_json.push({ word: word, reply: body });
            fs.writeJsonSync(`./db/reply.json`, reply_json);
            fs.writeJsonSync(`./db/word.json`, []);
            await client.reply(from, message, id).catch((erro) => console.log(erro));
            MenuNmber(from, 0)


        } catch (error) {

            console.log(error);

        }
    }


}