const wa = require('@open-wa/wa-automate');
const getMenu = require('./lib/getMenu.js');
const Folder = require('./lib/Folder.js');
const { menu } = require('./lib/menu.js');

Folder()


const options = {
    multiDevice: true,
    authTimeout: 0,
    blockCrashLogs: true,
    autoRefresh: true,
    cacheEnabled: true,
    qrRefreshS: 0,
    throwErrorOnTosBlock: false,
    deleteSessionDataOnLogout: false,
    skipUpdateCheck: false,
    bypassCSP: true,
    headless: true,
    logConsole: false,
    executablePath: process.platform === "win32" ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" : "/usr/bin/google-chrome-stable",
    qrTimeout: 0,
    sessionId: 'reply_session'
};


wa.create(options)
    .then(async client => await reply_bot(client))
    .catch(e => console.log(e))

async function reply_bot(client) {

    try {
        await client.onAnyMessage(async (msg) => {

            let from = msg.from;
            let id = msg.id
            let body = msg.body;
            let messages = msg;
            let Menufrom = await getMenu(from);
            let isGroupMsg = msg.isGroupMsg;

            await menu[Menufrom !== undefined ? Menufrom : 0].menu_name.exec({

                body: body,
                messages: messages,
                id: id,
                from: from,
                isGroup: isGroupMsg,
                client: client,

            });

        });

    } catch (error) {

        console.log(error);

    }

}
