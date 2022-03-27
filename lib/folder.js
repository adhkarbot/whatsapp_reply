import fs from 'fs-extra';

export default function Folder() {

    if (fs.existsSync('./db') === false ) {

        fs.mkdirSync('./db');
  
    }


    if (fs.existsSync('./db/Menu.json') === false) {

        fs.writeJsonSync('./db/Menu.json', {});
        
    }

    if (fs.existsSync('./db/reply.json') === false) {

        fs.writeJsonSync('./db/reply.json', []);
        
    }

    if (fs.existsSync('./db/word.json') === false) {

        fs.writeJsonSync('./db/word.json', []);
        
    }
    
}