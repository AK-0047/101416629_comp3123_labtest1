const fs = require('fs');
const path = require('path');

const log_directory = path.join(__dirname, 'Logs');
if(fs.existsSync(log_directory)) {
    const files = fs.readdirSync(log_directory);

    files.forEach(file => {
        console.log(`delete files ${file}`)
    });

    files.forEach(file => {
        fs.unlinkSync(path.join(log_directory, file));
    });

    fs.rmdirSync(log_directory);

    console.log('Deleted logs directory')
} else {
    console.log('Logs directory does not exist')
}