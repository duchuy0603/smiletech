const models= require('../../models');
const bcrypt = require('bcryptjs');
const messageConstants = require('../constant/messageConstants');



// Create
exports.create=async(product)=>{
    const Name = await models.products.findOne({where:{Name:product.Name}});
    if(Name){
        return Promise.resolve({
            message:  messageConstants.PRODUCT_EXIST_NAME,
        });
    }else{
            // save data
            return models.products.create(product);
        };
   };
   
// Find All
exports.getallpaging= (searchViewModel)=>{
        limit= searchViewModel.limit;
        offset= searchViewModel.offset;
       return models.products.findAndCountAll({ 
           limit: limit,
           offset: offset
        });
      };
   // Find All
   exports.get= ()=>{
      return  models.products.findAndCountAll({ 
    })
};



// FindById
exports.getbyID = async(Id)=>{
    return models.products.findOne({where:{Id:Id}})
};
    
// Update 
exports.update=async(Id,productUpdate)=>{
    const id= await models.products.findOne({where:{Id:Id}});
    if(!id){
        return Promise.resolve({
           message: messageConstants.PRODUCT_ID_NOT_EXIST,
        });
     }else{
        const deleted= await models.products.findOne({where:{Deleted:1}});
        if(deleted){
           return Promise.resolve({
              message: messageConstants.PRODUCT_NOT_AVAILABLE ,
        });
     }else{
        return  models.products.update(productUpdate,{where:{Id:Id}});
     }
    };
}



//  Delete
exports.destroy=async (Id)=>{
    const product= await models.products.findOne({where:{Id:Id}});
    if(product===null){
        return Promise.resolve({
            message:messageConstants.PRODUCT_NOT_EXIST,
        })
    }else{
    return models.products.destroy({where:{Id:Id}});
    }
};


//  Deleted fake
exports.delete=async (Id, options)=>{
    const id= await models.products.findOne({where:{Id:Id}});
    if(!id){
        return Promise.resolve({
           message: messageConstants.PRODUCT_ID_NOT_EXIST,
        });
     }else{
        const deleted= await models.products.findOne({where:{Deleted:1}});
        if(deleted){
           return Promise.resolve({
              message: messageConstants.PRODUCT_NOT_AVAILABLE ,
        });
     }else{
    return models.products.update(options,{where:{Id:Id,Deleted:0}});
        };
    };
};  



// Restore
exports.restore= async(Id,options)=>{
    const id= await models.products.findOne({where:{Id:Id}});
    if(!id){
        return Promise.resolve({
           message: messageConstants.PRODUCT_ID_NOT_EXIST,
        });
     }else{
        const deleted= await models.products.findOne({where:{Deleted:1}});
        if(!deleted){
           return Promise.resolve({
              message: messageConstants.PRODUCT_NOT_AVAILABLE ,
        });
     }else{
  return models.products.update(options,{where:{Id:Id,Deleted:1}});
        }
    };
};
    
   
