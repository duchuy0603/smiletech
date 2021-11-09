const models= require('../../models');
const bcrypt = require('bcryptjs');
const messageConstants = require('../constant/messageConstants');
const Paginatior = require('../commons/paginator');



// Create
exports.create=async(category)=>{
    return  models.categories.create(category);
      };
   
// Find All
exports.get= ()=>{
 return  models.categories.findAndCountAll();
};

// Find All
   exports.getallpaging= (searchViewModel)=>{
       limit= searchViewModel.limit;
       offset= searchViewModel.offset;
    return   models.categories.findAndCountAll({ 
           limit: limit,
           offset: offset
    });
};



// FindById
exports.getbyID = async(Id)=>{
    return models.categories.findOne({where:{Id:Id}});
};
    
    
// Update 
    exports.update=async(Id,productUpdate)=>{
const id= await models.categories.findOne({where:{Id:Id}});
    if(!id){
    return Promise.resolve({
    message:  messageConstants.CATEGORIES_ID_NOT_FOUND,
            });
      }else{  
        const Deleted= await models.categories.findOne({where:{Deleted: 1}});
        if(Deleted){
        return Promise.resolve({
        message:  messageConstants.CATEGORIES_NOT_AVAILABLE,
                });
          }else{  
        return models.categories.update(productUpdate,{where:{Id:Id}});
          }
      };
}



//  Delete
exports.destroy=(Id)=>{
    return  models.categories.destroy({where:{Id:Id}});
};


//  Deleted fake
exports.delete=async (Id,options)=>{
    const id= await models.categories.findOne({where:{Id:Id}});
    if(!id){
    return Promise.resolve({
    message:  messageConstants.CATEGORIES_ID_NOT_FOUND,
            });
      }else{  
        const Deleted= await models.categories.findOne({where:{Deleted: 1}});
        if(Deleted){
        return Promise.resolve({
        message:  messageConstants.CATEGORIES_NOT_AVAILABLE,
                });
          }else{ 
        return models.categories.update(options,{where:{Id:Id,Deleted:0}});
          };
    };
};



// Restore
exports.restore= async(Id,options)=>{
    const id= await models.categories.findOne({where:{Id:Id}});
    if(!id){
    return Promise.resolve({
    message:  messageConstants.CATEGORIES_ID_NOT_FOUND,
            });
      }else{  
        const Deleted= await models.categories.findOne({where:{Deleted: 1}});
        if(!Deleted){
        return Promise.resolve({
        message:  messageConstants.CATEGORIES_NOT_AVAILABLE,
                });
          }else{ 
   models.categories.update(options,{where:{Id:Id,Deleted:1}});
        };
    };
};
            
            
// get product by category_id 
exports.getProductsByCategoryId= (Id)=>{
models.categories.hasMany(models.products);
models.products.belongsTo(models.categories,{foreignKey: 'CategoryId'}); 
return   models.categories.findOne({ 
    where:{Id: Id},    
    include:[{
            model: models.products,
            attributes: ['Id','Name','Description','ParentId','Content','ImageUrl','Price','CategoryId']
                }]
       });
};
// get all list product by category
exports.getAllProductByCategory= ()=>{
    models.categories.hasMany(models.products);
    models.products.belongsTo(models.categories,{foreignKey: 'CategoryId'}); 
    return   models.categories.findAndCountAll({   
        include:[{
                model: models.products,
                attributes: ['Id','Name','Description','ParentId','Content','ImageUrl','Price','CategoryId']
                    }]
           });
    };