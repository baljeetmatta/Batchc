 var data="Welcome to node";
// //console.log(data);
// module.exports=data;

function test()
{
    console.log("Test called from module");
}

//module.exports=data;
//module.exports=test;
/*
module.exports.url=data;
module.exports.fun=test;
*/
module.exports={data,test};





