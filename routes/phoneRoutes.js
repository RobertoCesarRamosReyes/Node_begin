const express=require("express"); //Utilizamos la librería express
const router=express.Router(); //Instanciamos el router de express
const phoneController=require("../controllers/phoneController");

router.get("/",phoneController.verTodos);
router.get("/:id",phoneController.verUno);
router.post("/",phoneController.guardar);
router.put("/:id",phoneController.actualizar);
router.delete("/:id",phoneController.eliminar);

module.exports = router; //Exportamos las rutas