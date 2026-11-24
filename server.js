// Zero-dependency static server: node server.js  ->  http://localhost:8000
const http=require('http'),fs=require('fs'),path=require('path');
const T={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.md':'text/plain; charset=utf-8'};
http.createServer((q,r)=>{
 let u;try{u=decodeURIComponent(q.url.split('?')[0])}catch{r.writeHead(400);return r.end('Bad request')}
 const f=path.join(__dirname,u==='/'?'index.html':u);
 if(!f.startsWith(__dirname+path.sep)){r.writeHead(403);return r.end('Forbidden')}
 fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);return r.end('Not found')}
  r.writeHead(200,{'Content-Type':T[path.extname(f)]||'text/plain'});r.end(d)})
}).listen(8000,()=>console.log('Vaani running at http://localhost:8000 (use Chrome or Edge)'));
