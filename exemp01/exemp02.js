var http = require('http'),
    arquivo = require('fs');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type': 'text/html;charset=utf-8'});
    //_dirname retorna o diretorio do projeto    
    arquivo.readFile(__dirname+'/arquivo/index.html',function(err,html){
        if(err){
            res.write('Arquivo index.html não encontrado!');
        }else{
            res.write(html);
        }
        res.end();
    });
    arquivo.readFile(__dirname+'/arquivo/login.html',function(err,html){
        if(err){
            console.log('Arquivo login.html não encontrado!');
        }else{
            res.write(html);
        }
    })
});

server.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});