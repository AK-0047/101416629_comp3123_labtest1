const fs = require('fs');
const path = require('path');

const logs_directory = path.join(__dirname, 'Logs');
if(!fs.existsSync(logs_directory)) {
    fs.mkdirSync(logs_directory);
}

process.chdir(logs_directory);

for(let i = 0; i< 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `Log file number ${i}`);
    console.log(fileName);
}