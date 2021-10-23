const express=require("express"); //Utilizamos la librería express
const router=express.Router(); //Instanciamos el router de express
const peopleController=require("../controllers/peopleController");

router.get("/",peopleController.verTodos);
router.get("/:id",peopleController.verUno);
router.post("/",peopleController.guardar);
router.put("/:id",peopleController.actualizar);
router.delete("/:id",peopleController.eliminar);
router.get("/phone",peopleController.encuentraSusTelefonos);

module.exports = router; //Exportamos las rutas