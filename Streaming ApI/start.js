


const http = require("http");




var CounterID = 0;
var csv = "ID,Gender,Age\n";  
var gender  = ["Female", "Male"]; 
var maxage = 85;






var server = http.createServer((req,res)=>{


setInterval(() => {

    
    res.writeHead(200,"API Sent information",{
        'Content-Type':'text/plain'
    });

    var age = Math.round(Math.random()*maxage);
       


    CounterID++
    csv+=CounterID.toString()+","+gender[Math.round(Math.random())]+","+age+"\n";
    res.write(`${csv}`);
    res.end();
    res.flushHeaders();

  


}, 5000);



});

server.listen(2457);




