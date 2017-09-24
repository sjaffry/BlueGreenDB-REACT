var express = require('express');

var app = express();

var port = process.env.PORT || 8000;

var router = express.Router();

router.route('/')
    .get(function(req,res){
            res.sendFile(__dirname + '/index.html');
    });    

app.use(express.static(__dirname));
app.use('/api', router);
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.listen(port, function(){
    console.log('Running on PORT ' + port);
});