/*const EventEmiiter=require("events");
const events=new EventEmiiter();
function log()
{
    console.log("Log function called");
    events.emit("Login");

}
module.exports.log=log;
module.exports.events=events;
*/
const EventEmiiter=require("events");
class Logger extends EventEmiiter
{
 
     log()
    {
        console.log("Log function called");
        this.emit("Login");
    }
}
module.exports=Logger;


