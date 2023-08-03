// const os=require("os");
// console.log(os.totalmem());
const  fs=require("fs");
//console.log(fs);
/*
const contents=fs.readFileSync("./script1.js","utf-8");
console.log(contents);
*/

// fs.readFile("./script1.js","utf-8",(err,data)=>{
//     // if(err)
//     // console.log("Error reading file");
//     // else

//     console.log(data);

// })
// console.log("Reading");
/*
fs.writeFileSync("./data.txt","Hello to Nodejs");

fs.writeFile("./data.txt","Contents",(err)=>{

})
*/
/*
fs.readdir("./",(err,files)=>{

    console.log(files);

})*/
function search(path)
{
    fs.readdir(path,(err,files)=>{
        if(!err)
        {
        files.forEach((item)=>{
            console.log(path+"/"+item);
            search(path+"/"+item);

        })
    }


    })



}

search(".");




