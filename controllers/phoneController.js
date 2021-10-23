const phoneController={};
const {  Phone }=require('../models');

phoneController.verTodos= async (req,res)=>{
    try {
        const datos = await Phone.findAll();
        return res.status(200).json(datos);
    }catch(e){
        return res.status(500).json({"respuesta":"Error"});
    }
}

phoneController.verUno= async (req,res)=>{
    const id=req.params.id;
    try {
        const datos=await Phone.findOne({where:{id}});
        return res.status(200).json(datos);
    }catch(e){
        return res.status(500).json({"Respuesta":"Error"});
    }
}

phoneController.guardar= async(req,res)=>{
    const datos=req.body;
    try {
        const respuesta=await Phone.create(datos);
        return res.status(200).json(respuesta);
    }catch(e){
        return res.status(500).json({"Respuesta":'Error'});
    }
}

phoneController.actualizar= async(req,res)=>{
    const {id} = req.params;
    const datos=req.body;
    try {
        const respuesta= await Phone.update(datos,{where:{'id':id}});
        return res.status(200).json(respuesta);
    }catch(e){
        return res.status(500).json({"Respuesta":'Error'});
    }
}

phoneController.eliminar=async(req,res)=>{
    const {id}=req.params;
    try {
        const respuesta=await Phone.destroy({where:{id}});
        return res.status(200).json({respuesta});
    }catch(e){
        return res.status(500).json({"Respuesta":'Error'});
    }
}


module.exports=phoneController;