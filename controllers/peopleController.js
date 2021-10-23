const peopleController={};
const { People, Phone }=require('../models');

peopleController.verTodos= async (req,res)=>{
    try {
        const datos = await People.findAll();
        return res.status(200).json(datos);
        }catch(e){
        return res.status(500).json({"respuesta":"Error"});
    }
}

peopleController.verUno= async (req,res)=>{
    const id=req.params.id;
    try {
        const datos=await People.findOne({where:{id}});
        return res.status(200).json(datos);
        }catch(e){
        return res.status(500).json({"Respuesta":"Error"});
    }
}

peopleController.guardar= async(req,res)=>{
    const datos=req.body;
    try {
        const respuesta=await People.create(datos);
        return res.status(200).json(respuesta);
    }catch(e){
        return res.status(500).json({"Respuesta":'Error'});
    }
}

peopleController.actualizar= async(req,res)=>{
    const {id} = req.params;
    const datos=req.body;
    try {
        const respuesta= await People.update(datos,{where:{'id':id}});
        return res.status(200).json(respuesta);
    }catch(e){
        return res.status(500).json({"Respuesta":'Error'});
    }
}

peopleController.eliminar=async(req,res)=>{
    const {id}=req.params;
    try {
        const respuesta=await People.destroy({where:{id}});
        return res.status(200).json({respuesta});
    }catch(e){
        return res.status(500).json({"Respuesta":'Error'});
    }
}

peopleController.encuentraSusTelefonos=async (req,res)=>{
    const {id}=req.params;
    try {
        const respuesta=await People.findAll({
            include:[{
                model:Phone,
                required:false
            }]
        })
    }catch(e){
        return res.status(500).json({"Respuesta":'Error'});
    }
}


module.exports=peopleController;