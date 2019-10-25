var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Hello word!');
    res.write('<br>');
    res.write('Primeiro teste');
    res.write('<br>');
    res.write('Jefferson de Jesus')
    res.end();
});


const tst = () => {
    
}

server.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});
