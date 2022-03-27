import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';

export const home = {

    async exec({ from, client, body, id }) {

        try {

            if (body === 'الكلمة' || body === 'الكلمه' || body === 'كلمة' || body === 'كلمه') {

                let message = 'من فضلك قم بكتابة الكلمة 💬'
                await client.reply(from, message, id).catch((erro) => console.log(erro));
                MenuNmber(from, 1);

            }

            else if (fs.existsSync('./db/reply.json')) {

                let reply_json = fs.readJsonSync(`./db/reply.json`);
                let GetReply = reply_json.find((e) => e.word === body);

                if (GetReply !== undefined) {

                    await client.reply(from, GetReply.reply, id).catch((erro) => console.log(erro));

                }
            }

        } catch (error) {

            console.log(error);

        }

    }

}