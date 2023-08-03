//const EventEmitter=require("events");//class from module called events

//EventEmitter obj
//Classname obj
//EventEmitter  *obj=new EventEmitter();
//EventEmiiter obj=new EventEmitter();
//let obj=new EventEmitter();
// let obj=new EventEmitter();



// obj.on("Login",function(){

//     console.log("Event Handled");

// })
// function display()
// {
//     console.log("Displayed called...")
//     obj.emit("Login");

// }

// display();

const EventEmiiter=require("events");
/*const event=new EventEmiiter();
event.on("Login",()=>{
console.log("Login handled");
});*/

// const obj=require("./eventmodule");
// obj.events.on("Login",()=>{
//     console.log("Event handled");
// })
// obj.log();
//const l=require("./eventmodule");
//console.log(l);

const Logger=require("./eventmodule");
const logger=new Logger();
logger.on("Login",()=>{
    console.log("Events handled");
    
});
logger.log();




