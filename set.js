

/*Why does my code work? I don’t know. Why does my code break? I also don’t know.*/
/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VU25KqOBT9l7xqH+UuVnXVACrgBRHxOnUeAgSIyi0Ebejy36dou6fPVM3p6eEplYS1V/Zae72CNMMlmqEaDF9BTvAVUtQuaZ0jMARqFYaIgC4IIIVgCFhTRlbHkIIbPiQjw7CWUmCIxQVbTGj3c23JLzwHHo8dw38G9y7IK++C/S8A+4zn7EbN6rZeXkfRxfLHpW6clG3FJoUcXAiUjLiw9n01PjyDe4sIMcFpNM5jlCACLzNU2xCT79FfTsdr6pAbnjisLHdiJJKtbzRNVRl1zzIKV5T2U3NZhob5Pfr1fjcIBTdXey8HKUn3wX5s7HRmq71UuNOkbFquK82TjZEyeNAvcZSiwAxQSjGtv933QlV9xIVE2oi90EwikkYWs103qhwlxZQ9O4sbd7iemBX7zb6jXpnq6XFwTS24XTCuzTVYm6fzgb5EVNmI+tW0Jg7OWfUfxG3y4ZXz/+k7q61o7Mwn+8NA3rq3qjhOHdXiB6Gax9n+ZdfAdWXXG1HfHr5pm9XJZR13ikcXqeepueUWojCx82pysst93+TdfsDE+Nqcs0/6kFbkK5ad5dJXnOJw2CiWmuGR5HObHr56t/7R9HeekPgZF7HbzgzJOicXm1Ui2rFjiLvANTIC7Yt91Vd768yXcYjXBeGCtYiV57cXnVFtBmDI3LuAoAiXlECKs7TdYwWmC2BwXSOfIPrWXqBlwqGOhdly29s0pjYSmQXvZjytUHgiy8Y+GYq+tSNtX2TPoAtykvmoLFFg4JJmpF6gsoQRKsHwz59dkKIX+hCuLccxXRBiUtJNWuWXDAYfqn4cQt/PqpSu69TX2gUiYNj/3EaU4jQq2z5WKSR+jK9IiyEtwTCElxLduyBAV+yjFg8QNwlPBj2uW5+aVjw3rSletZTjLH1c6cssz4qy/CTLA/6JF/rikzfwxKeAEQMm4JEgIhZ0AX6fmfaf30sY1ienia9XTU+KmapVt4jZHc1ZfYveZHj0HhEUgCElFeoCD/rnKnezM0q/wKV6vNZ3Td6PpdoukTHJZ7o0ZcYELX7BfWgKhq+fOaVlQYun27P9aqBPQRckbxbE7ctZgZdYiZN4npeHA+aP8setbSTM8x8poqALLu/XRFnmWY4TBozYF9qb7cH9b01awABRiC9l6x1bFLJMGY+tfUwGpq4rq0jRIgV8avgxDA+zNaLv88ukSItjEUvuSy7JlEu4whmLU+k83SE44vDVv+5uh+d/AQFDYM2jY1anfCadPJcLplNvhg3PzTaXZNyERmRMO2xFbwcx6t202J/7psZuGkl1z6tgMSd5/3b0J/tmXO4EX+FdaImrvXZ7bqs9vPRrMQL3gYpnnCRPmoo9rsJ6PvLcNQOPM/clQJrgbeTljZtohVyhjDqd2lEn8Wlb+0WRjRSjmqsvTKfjNGJlHr1FVaP5+nR7jOlbTFze4xm/DdDru/NCjN7SLoWtgv+t3ecQ9O/dXzDe8/M3RlP9TmosR3mRiwnMUH8AUc8LBCqenSVGgrZNk0jmCTdnSh3c7z+7IL9AGmYkAUMA04BkOABdQLKqnVIzDbMvimlK39TeA+oCS6p8Tr6LE1RSmORgyEi8POhLXJsN7S2bZLkByxgMgb07C2rr6VrJ8zWF9CNHgNJ+c10F978AeislTmMIAAA=', //paste your session here 
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ben", //replace with your owner name
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254727374449",   //replace with your owner number  
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/4h8lfw.jpg",    //replace with your image url                     
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'Busy right now sorry for the inconvenience',             
    GURL: process.env.GURL || "https://github.com/Benngugi", // replace with your url
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ben-MD', //replace with your bot name
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", //replace with your timezone 
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: true,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: true,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;

//Why do we call it "open source" when it feels more like "open wounds"?🗿🗿

//Because sharing is caring... and crying is healing🗿🗿

