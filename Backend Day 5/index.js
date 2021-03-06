const fs = require('fs');

const helpText = (msg) => {
    console.log(`-- Vidushi Bhatnagar --`);
if(msg.length > 0) {
    console.warn(">>>",msg,"<<<");
}
console.log(`List of Commands -
--create-file <FilePath> <FileText> : creates a file to given path and with text
--create-folder <FolderPath> : creates a Folder to given path
--append-to-file <FilePath> <Text> : appends Text to given file name
--read-file <FilePath> : reads a file
--rename-file <InitialFile> <NewFileName> : renames he filePath
--remove-file <FilePath> : removes a file
--remove-folder <PathToFolder> : removes a folder
    `);
}

if(process.argv.length == 2 || process.argv.length == 3 && process.argv[2] == "--help"){
    helpText('');
}
else if(process.argv.length == 2 || process.argv.length == 3 && process.argv[2] != "--help"){
    helpText('Invalid Arguments were passed');
}
else if(process.argv.length == 4){
    if(process.argv[2] == '--create-folder') fs.mkdirSync(process.argv[3],err => console.log(err));
    else if(process.argv[2] == '--read-file') fs.readFileSync(process.argv[3],err => console.log(err));
    else if(process.argv[2] == '--remove-file') fs.unlinkSync(process.argv[3],err => console.log(err));
    else if(process.argv[2] == '--remove-folder') fs.rmkdirSync(process.argv[3],err => console.log(err));
    else{
        helpText('Invalid Opeartion was executed.');
    }
}
else if(process.argv.length == 5){
    if(process.argv[2] == '--create-file') fs.writeFileSync(process.argv[3], process.argv[4],err => console.log(err));
    else if(process.argv[2] == '--append-to-file') fs.appendFileSync(process.argv[3], process.argv[4],err => console.log(err));
    else if(process.argv[2] == '--rename-file') fs.renameFileSync(process.argv[3], process.argv[4],err => console.log(err));
    else {
        helpText('Invalid Opeartion was executed');
    }

}