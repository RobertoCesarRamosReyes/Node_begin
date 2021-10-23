const express=require('express'); //Llamamos la librería express
const app=express();//instanciamos objeto express
const morgan = require('morgan'); //Llamamos a la librería morgan
const router = require('./routes'); //importamos las rutas

app.use(express.json()); //Indicamos a express que debe enteder json
app.use(express.urlencoded({extended:false}));//No sabemos (pero necesario)
app.use(morgan('dev')); //Usamos morgan en modo de desarrollo

app.use("/app",router);//Ruta de nuestra API

app.listen(3000,()=>{ //Arrancamos el servidor
    console.log('Funkando'); //Le decimos que esta funkando
});