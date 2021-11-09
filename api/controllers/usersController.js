const userService= require('../services/userService');
const { validationResult } = require('express-validator');
const messageConstants = require('../constant/messageConstants');
const models = require('../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Paginator = require('../commons/paginator');
const Op = models.Sequelize.Op;

// Get All
exports.get = async function (req, res) {
   await userService.get().then( result =>{
     res.status(200).json({
      success: true,
      message:messageConstants.USER_FOUND,
       data: result
     });
      }).catch(err => {
        res.status(500).send({
        message: err.message ||500
        });
      });
};

// Get All paging
  exports.getallpaging = async function (req, res) {
  const  page = parseInt(req.query.page) || 1;
   const  size = parseInt(req.query.size);
   var condition = JSON.stringify(req.query) ||null;
   const { limit, offset } = Paginator.getPagination(page, size);
   const data= {limit,offset,condition};
   await userService.getallpaging(data).then( result =>{
        const response = Paginator.getPagingData(result, page, limit);
        res.status(200).json({
          data:response,
          success: true
        });
      }).catch(err => {
        res.status(500).send({
        message: err.message ||500
        });
      });
};

// Get stores
exports.getStores= (req,res)=>{
   userService.getStores(req,res).then(data=>{
    res.status(200).json({
      success: true,
    message:messageConstants.USER_FOUND,
    users:data
     }); 
}).catch(err =>{
  res.send({
    error:{
      status: err.status ||500,
      message: err.message
    },
  })
});
};


// Get roles
exports.getRoles= (req,res)=>{
   userService.getRoles().then(data=>{
      res.status(200).json({
        success: true,
      message:messageConstants.USER_FOUND,
      users:data
     });
    }).catch(err =>{
  res.send({
      error:{
      status: err.status ||500,
      message: err.message
      },
    })
  });
};



// GetbyID
exports.getbyID =function(req,res){
   userService.getbyID(req.params.id).then(user=>{
    if(user===null){
     res.status(409).json({
        message:messageConstants.USER_ID_NOT_FOUND,
        })
    }else{
        res.status(200).json({
          success: true,
           message:messageConstants.USER_FOUND,
           user:user
           });
        }
     }).catch(err =>{
        res.send({
          error:{
            status: err.status ||500,
            message: err.message
          },
        })
  });
};


// Register
exports.register =async(req,res,next) => {
  try{
  const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }
      const user= {
        UserName: req.body.UserName,
        Password:  req.body.Password,
        FullName: req.body.FullName,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Avatar: req.body.Avatar,
        Type: req.body.Type,
        StoreId: req.body.StoreId,
        CreatedBy:req.body.CreatedBy,
        Status: 1,
        Deleted: 0
     }
            userService.register(user).then(result=>{
            if(result.message===null){
            res.status(200).json({
              success: true,
             message: messageConstants.USER_CREATE_SUSSCESS,
             User :result
        });
      }else{
          res.status(404).json({
            message :result.message
          });
        }
     }).catch(err =>{
        res.send({
          error:{
            status: err.status ||500,
            message: err.message
          },
        })
     });
} catch(err){
  return next(err);
}
};

// Update
exports.update =async (req, res, next) => {
  try{
  const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }
      const  Id =  req.params.id;
       const userUpdate= {
         UserName: req.body.UserName,
         Password: req.body.Password,
         FullName: req.body.FullName,
         Email: req.body.Email,
         Phone: req.body.Phone,
         Avatar: req.body.Avatar,
         Type: req.body.Type,
         StoreId: req.body.StoreId,
         UpdatedBy:req.body.UpdatedBy,
         UpdatedDate:Date(),
      
      }
      userService.update(Id,userUpdate).then( async(result)=>{
        if(result==true){
          const data= await models.users.findOne({Id:Id});
           res.status(200).json({
            success: true,
           message: messageConstants.USER_UPDATE_SUSSCESS,
           userUpdate : data
           });
        }else{
           res.status(500).json({
             message: result.message,
           })
        }
     }).catch(err =>{
        res.send({
          error:{
            status: err.status ||500,
            message: err.message
                 },
           })
     });
}catch(err) {
  return next(err)
}
};
//Soft delete
exports.delete =function(req,res,next){
  try{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.status(422).json({ errors: errors.array() });
          return;
        }
        const Id= req.params.id;
        const options = {field: 'Deleted', Deleted: 1, UpdatedDate:Date()}
        userService.delete(Id,options).then(result=>{
          if(result==true){
            res.status(200).json({
              success:true,
              message: messageConstants.USER_DELETED,
              });
            }else{
              res.status(500).json({
                message: result.message,
            })
          }    
        }).catch(err =>{
           res.send({
             error:{
               status: err.status ||500,
               message:err.message
             },
           })
        });
}catch(err) {
  return next(err)
}
};
// // Delete
exports.destroy =function(req,res){
  const Id =  req.params.id;
   userService.destroy(Id).then(result =>{
    if(result==true){
    res.status(200).json({
       success: true,
       message: messageConstants.USER_DELETED,
       });
      }else{
        res.status(500).json({
          message: result.message,
      })
    }    
 }).catch(err =>{
    res.send({
      error:{
        status: err.status ||500,
        message:err.message
      },
    })
 });
};
// Restore
exports.restore =function(req,res){
  const Id =  req.params.id;
  const options = {field: 'Deleted', Deleted: 0, UpdatedDate:Date()}
  userService.restore(Id,options).then(result=>{
    if(result==true){
          res.status(200).json({
          success: true,
          message: messageConstants.USER_RESTORE_SUSSCESS,
       })
    }else{
       res.status(404).json({
       message: result.message,
    })
 }        
}).catch(err =>{
     res.send({
     error:{
     status: err.status ||500,
     message: err.message
},
})
});
};
// Login
exports.login=async(req,res,next)=>{
  try{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
      res.status(422).json({errors: errors.array()});
      return;
    }
    const account= {
      UserName: req.body.UserName,
      Password: req.body.Password
    };
     userService.login(account).then(data=>{
       if(data.accessToken,data.refreshToken){
       res.status(200).json({
         success:true,
         message:messageConstants.USER_LOGIN_SUSSCESS,
         Account: account.UserName,
         Token: data
        });
      }
      else{
        res.status(200).json({
          Account: account.UserName,
          message: data.message
         });
      }
    }).catch(err =>{
      res.send({
        error:{
          status: err.status ||500,
          message: err.message
              },
           })
        })
 }catch(err){
    return next(err);
  };
};

// Reset password
exports.resetpassword=async(req,res,next)=>{
  try{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
      res.status(422).json({errors: errors.array()});
      return;
    }
    const  Id =  req.params.id;
    const account= {
      Email: req.body.Email,
      UserName: req.body.UserName,
      Password: req.body.Password,
    };
     userService.resetpassword(Id,account).then(data=>{
       res.status(200).json({
        success: true,
        Account: account.UserName,
        Password: account.Password
        });
    }).catch(err =>{
      res.send({
        error:{
          status: err.status ||500,
          message: err.message
              },
           })
        })
 }catch(err){
    return next(err);
  };
};