const fs=require('fs')
const filepath='./randomFile.txt'

const createFile=()=>{
    fs.writeFileSync(filepath,'hello','utf8')
    console.log(`Created the File.`)
}

const readFile=()=>{
    const fileData=fs.readFileSync(filepath,'utf8')
    console.log(`Data from file:${fileData}`)
}

const writeFile=(newContent)=>{
    fs.writeFileSync(filepath,newContent,'utf8')
    console.log(`File rewritten`)
}

const updateFile=(appendContent)=>{
    fs.appendFileSync(filepath,appendContent,'utf8')
    console.log(`File got appended`)
}
function deleteFile(){
    fs.unlinkSync(filepath)
    console.log(`Deleted File`)
}
createFile()
readFile()
writeFile("hello guys! ")
readFile()
updateFile("Good Morning")
readFile()
//deleteFile()
//readFile()