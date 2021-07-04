// link al repositorio de github https://github.com/rherrera94/desafio7
const express= require('express');
const app= express();
fs=require('fs');
var visitas_item=0;
var visitas_items=0;

app.get('/items',async (req,res)=>{
    visitas_items++;
    try{
        const contenido= await fs.promises.readFile('productos.txt','utf-8');
        let content=JSON.parse(contenido);
        res.send({"items": content, "cantidad":content.length})
    }catch{
        res.send("se produjo un error al leer el archivo de productos");
    }
})
app.get('/item',async (req,res)=>{
    visitas_item++;
    try{
        const contenido= await fs.promises.readFile('productos.txt','utf-8');
        let content=JSON.parse(contenido);
        let indice_random=Math.floor(Math.random() * (content.length));
        res.send({"item": content[indice_random]})
    }catch{
        res.send("se produjo un error al leer el archivo de productos");
    }
})
app.get('/visitas',(req,res)=>{
    res.send({"visitas": {"item": visitas_item, "items":visitas_items}});
})
app.listen (8080,()=>console.log('El servidor esta funcionando'));







