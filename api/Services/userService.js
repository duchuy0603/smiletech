const models= require('../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const messageConstants = require('../constant/messageConstants');
// const Paginator = require('../commons/paginator');
const Paginator = require('../commons/paginator');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory');
const Op = models.Sequelize.Op;

/**
* Returns a list of vehicleMake
* @param   {SearchViewModel}   searchViewModel - The model search to find
* @returns {Promise} resolved user if found, otherwise resolves undefined
*/

exports.get = function () {
   return models.users.findAndCountAll();
};

// Get all paging information about users

exports.getallpaging = function (searchViewModel) {
   limit= searchViewModel.limit;
   offset= searchViewModel.offset;
  //  var filters = {};
  //   filters.$and = [{
  //     Deleted: 0
  // }];

  // var searchModel = searchViewModel.condition;
  // var sortColumn = searchViewModel.sortColumn;

  //  if ( searchModel != null) {
  //   if(searchModel.UserName)
  //   filters.$and.push( { UserName: { $like: '%' + searchModel.UserName + '%'}
  //     }
  //   )
  // }                                        
  // let orderby = 'Id ASC';
  // if (sortColumn && sortColumn.columnName != null) {
  //     if (sortColumn.columnName && sortColumn.isAsc) {
  //         orderby = sortColumn.columnName + ' ASC';
  //     } else {
  //         orderby = sortColumn.columnName + ' DESC';
  //     }
  // }
       return models.users.findAndCountAll({
        //  where: filters,
        //  order: orderby,
         limit: limit,
         offset: offset,
   });
 };
                                                         
                                                         
                                                         
//  Sign-in/Create
 exports.register=async(user)=>{
  const email = await models.users.findOne({where:{Email:user.Email}});
  if(!email){
    const userName= await models.users.findOne({where:{UserName:user.UserName}});
    if(!userName){
      const salt= await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(user.Password,salt);
      user.Password= hashPassword;
      return models.users.create(user);
  }else{
    return Promise.resolve({
      message:  messageConstants.USER_EXIST_NAME,
    });
  }
}else{
    return Promise.resolve({
       message:  messageConstants.USER_MAIL_EXIST,
       });
    };
};
   
   
//  Login
exports.login = (account)=>{
  return  models.users.findOne({where:{UserName:account.UserName}}).then( async(user)=>{
      if(user){
         const isMatch = await bcrypt.compare(account.Password, user.Password)
         if(isMatch){
            const payload={
               UserName: user.UserName,
               Password: user.Password
            }
            const accessToken = jwt.sign(
                payload,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '7h' });
            const refreshToken = jwt.sign( 
                payload,process.env.REFRESH_TOKEN_SECRET,{ expiresIn: '7d' });
            return {accessToken,refreshToken};
         }
         else{
            return Promise.resolve({
               status: 404,
               message: messageConstants.USER_PASS_INVALID,
         });
      }
   }
      else{
         return Promise.resolve({
            status: 404,
            message: messageConstants.USER_USERNAME_NOT_EXIST,
         });
       } 
   });
};

// Find User with Roles
exports.getRoles= ()=>{
   const UserRole = sequelize.define('UserRole', {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: models.users, 
          key: 'Type'
        }
      },
      RoleId: {
        type: DataTypes.INTEGER,
        references: {
          model: models.roles, 
          key: 'id'
        }
      },
    });
   models.users.belongsTo(models.roles,{through: UserRole, foreignKey: 'Type'});
   models.roles.belongsTo(models.users,{through: UserRole, foreignKey: 'id'}); 
   return  models.users.findAndCountAll({
        attributes:['UserName','Password','Email','Phone','Avatar','Type'],
         include:[{
           model: models.roles,
           attributes:['Name', 'Description'],
        }],
      });
};
// Get user have stores
exports.getStores= function(){
const UserStore = sequelize.define('UserStore', {
   UserId: {
     type: DataTypes.INTEGER,
     references: {
       model: models.users, 
       key: 'StoreId'
     }
   },
   StoreId: {
     type: DataTypes.INTEGER,
     references: {
       model: models.stores, 
       key: 'id'
     }
   },
 });
 models.users.belongsTo(models.stores,{through: UserStore, foreignKey: 'StoreId'});
 models.stores.belongsTo(models.users,{through: UserStore, foreignKey: 'id'}); 
  return models.users.findAndCountAll({
   attributes:['UserName','Password','Email','Phone','Avatar','StoreId'],
   include:[{
     model: models.stores ,
     attributes:['Name', 'Description','Content', 'Phone','GMap','Facebook','Shopee','Youtube']
  }],
  });
};


// Find by Id
exports.getbyID = async(Id)=>{
    return models.users.findOne({where:{Id:Id}})
};


 // Update 
 exports.update=async(Id,userUpdate)=>{
  const id= await models.users.findOne({where:{Id:Id}});
  if(!id){
      return Promise.resolve({
         message: messageConstants.USER_ID_NOT_FOUND ,
      });
   }else{
      const deleted= await models.users.findOne({where:{Deleted:1}});
      if(deleted){
         return Promise.resolve({
            message: messageConstants.USER_NOT_AVAILABLE ,
      });
   }else{
  const salt= await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(userUpdate.Password,salt);
  userUpdate.Password= hashPassword;
  return models.users.update(userUpdate,{where:{Id:Id}});
     };
   }
};

//  Deleted fake
exports. delete=async (Id,options)=>{
  const id= await models.users.findOne({where:{Id:Id}});
    if(id){
      const deleted= await models.users.findOne({where:{Deleted:1}});
      if(deleted===null){
        return models.users.update(options,{where:{Id:Id,Deleted:0}});
      }else{
        return Promise.resolve({
          message: messageConstants.USER_NOT_AVAILABLE 
          });
      }
    }else{
      return Promise.resolve({
        message: messageConstants.USER_ID_NOT_FOUND ,
      });
    }
};
// Restore
exports.restore=async (Id,options)=>{
  const id= await models.users.findOne({where:{Id:Id}});
  if(!id){
      return Promise.resolve({
         message: messageConstants.USER_ID_NOT_FOUND ,
      });
   }else{
      const deleted= await models.users.findOne({where:{Deleted:1}});
      if(!deleted){
         return Promise.resolve({
            message: messageConstants.USER_NOT_AVAILABLE ,
      });
   }else{
   return models.users.update(options,{where:{Id:Id, Deleted:1}});
    }
  }
};

   //  Delete
 exports.destroy= async(Id)=>{  
const id= await models.users.findOne({where:{Id:Id}});
 if(!id){
     return Promise.resolve({
        message: messageConstants.USER_ID_NOT_FOUND ,
     });
  }else{
   return models.users.destroy({where:{Id:Id}});
  };
};

// Reset password

exports.resetpassword = async(Id,account)=>{
   await models.users.findOne({where:{Email:account.Email}}).then( async(user)=>{
      if(user){
         const isMatch = await bcrypt.compare(account.Email, user.Email)
         if(isMatch){
          const salt= await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(account.Password,salt);
          account.Password= hashPassword;
          return models.users.update(account,{where:{Id:Id}});
         }
   }
   });
};
