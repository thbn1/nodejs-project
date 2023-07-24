var http = require("http");
var fs = require("fs");


var server = http.createServer((req,res)=>{
    console.log(req.url);

    if (req.url=="/"){
        fs.readFile("/index.html",(err,html) => {
            if (err){
                console.log("gotumuzde patladi");
            }
            else{
                res.write(html);
                res.end();
            }

        });
        
    }

    else if(req.url=="/urunler"){
        res.write("<h1>Anasayfa<h1>");
        res.end();
    }
    
});

server.listen(3000, () => {
    console.log("listening on port 3000");
});