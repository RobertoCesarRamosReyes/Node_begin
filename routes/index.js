const router=require("express").Router(); //Importamos el manejador de rutas
const peopleRoutes=require("./peopleRoutes"); //Traemos un grupo de rutas
const phoneRoutes=require("./phoneRoutes"); //Traemos un grupo de rutas

router.use("/people",peopleRoutes); //Definimos la ruta inicial y usamos el grupo de rutas
router.use("/phone",phoneRoutes); //Definimos la ruta inicial y usamos el grupo de rutas
module.exports=router; //Exponemos el router