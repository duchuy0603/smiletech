const models= require('../../models');
const bcrypt = require('bcryptjs');
const messageConstants = require('../constant/messageConstants');
const { Op } = require('sequelize')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory');


// Create
exports.create=async(store)=>{
    const name = await models.stores.findOne({where:{Name:store.Name}});
    if(name){
        return Promise.resolve({
          message:  messageConstants.STORE_EXIST_NAME
        });
    }else{
        const Phone= await models.stores.findOne({where:{Phone:store.Phone}});
        if(Phone){
        return Promise.resolve({
            message:  messageConstants.STORE_PHONE_EXIST
        });
        }else{
                return models.stores.create(store);
            }
        };
};
   
   
// Find All
exports.get=()=>{
    return  models.stores.findAndCountAll();
};

// Find All
exports.getallpaging=(searchViewModel) =>{
    limit= searchViewModel.limit;
    offset= searchViewModel.offset;
    return  models.stores.findAndCountAll({
             limit: limit,
             offset: offset,
    });
};


// FindById
exports.getbyID = async(Id)=>{
    return models.stores.findOne({where:{Id:Id}})
};
// Update 

exports.update=async(Id,storeUpdate)=>{
    const id= await models.stores.findOne({where:{Id:Id}});
    if(!id){
        return Promise.resolve({
           message: messageConstants.STORE_ID_NOT_EXIST ,
        });
     }else{
        const deleted= await models.stores.findOne({where:{Deleted:1}});
        if(deleted){
           return Promise.resolve({
            message: messageConstants.STORE_NOT_AVAILABLE ,
        });
     }else{
        return models.stores.update(storeUpdate,{where:{Id:Id}});
     }
        }
};



//  Delete
exports.destroy= async(Id)=>{
    const store= await models.stores.findOne({where:{Id:Id}});
    if(store===null){
        return Promise.resolve({
            message:messageConstants.STORE_ID_NOT_EXIST,
        })
    }else{
    return models.stores.destroy({where:{Id:Id}});
    };
};


//  Deleted fake
exports.delete= async(Id,options)=>{
    const id= await models.stores.findOne({where:{Id:Id}});
    if(id){
        const deleted= await models.stores.findOne({where:{Deleted:1}});
        if(deleted===null){
            return models.stores.update(options,{where:{Id:Id,Deleted:0}});
        }else{
            return Promise.resolve({
               message: messageConstants.STORE_NOT_AVAILABLE ,
            });
        }
    }else{
            return Promise.resolve({
            message: messageConstants.STORE_ID_NOT_EXIST ,
      });
       }
};



// Restore
exports.restore= async(Id,options)=>{
    const id= await models.stores.findOne({where:{Id:Id}});
    if(!id){
        return Promise.resolve({
           message: messageConstants.STORE_ID_NOT_EXIST ,
        });
     }else{
        const deleted= await models.stores.findOne({where:{Deleted:1}});
        if(!deleted){
           return Promise.resolve({
            message: messageConstants.STORE_NOT_AVAILABLE ,
        });
     }else{
      return models.stores.update(options,{where:{Id:Id,Deleted:1}})
    };
  };
};
   
// API for lookings orders stores having
    exports.getOrders= ()=>{
        models.stores.hasMany(models.orders, {foreignKey: 'StoreId'});
        models.orders.belongsTo(models.stores,{foreignKey: 'id'});
        return models.stores.findAll({
            include:[{
                model: models.orders,
                attributes:[          
                "CustomerId",
                "StoreId",
                "OrderDate",
                "Contact",
                "Phone",
                "Description",
                "Address"]
               }],

       })
};
// API for lookings notifications stores having
        exports.getNotifications= ()=>{
            models.stores.hasMany(models.notifications, {foreignKey: 'StoreId'});
            models.notifications.belongsTo(models.stores,{foreignKey: 'id'});
            return models.stores.findAll({
                attributes:['Id','Name','Description','Content','Email','Phone','Gmap','Facebook','Shopee','Youtube'],
                include:[{
                    model: models.notifications,
                    attributes:[   
                    'Id',       
                    "Name",
                    "Content", 
                    ]
        }],
    })
};


   
    
