const categoryService = require("../services/categoryService");
const { validationResult } = require("express-validator");
const messageConstants = require('../constant/messageConstants');

// Get product by category id
exports.getProductsByCategoryId = (req, res) => {
  const Id = req.params.id;
  categoryService.getProductsByCategoryId(Id).then(data => {
    res.status(200).json({
      success: true,
      message: messageConstants.CATEGORIES_FOUND,
      Categories: data
    });
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};
// get all list product by category
exports.getAllProductByCategory = (req, res) => {

  categoryService.getAllProductByCategory().then(data => {
    res.status(200).json({
      success: true,
      message: messageConstants.CATEGORIES_FOUND,
      Categories: data
    });
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};
// Get All
exports.get = (req, res) => {
  categoryService.get().then(data => {
    res.status(200).json({
      success: true,
      message: messageConstants.CATEGORIES_FOUND,
      Categories: data
    });
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};

// GetbyID
exports.getbyID = function (req, res) {
  const Id = req.params.id;
  return categoryService.getbyID(Id).then(category => {
    if (category === null) {
      res.status(404).json({
        message: messageConstants.CATEGORIES_ID_NOT_FOUND,
      })
    } else {
      res.status(200).json({
        success: true,
        message: messageConstants.CATEGORIES_FOUND,
        category: category
      });
    }
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};

// Create

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(422).json({ errors: errors.array()});
      return;
    }
    await upload(req, res);
    const file =  req.files;
    file.forEch((item)=>{
      item.uploadDir= "/upload/uploads/";
      let newPath = item.uploadDir + item.originalname;
      const category = {
        Name: req.body.Name,
        Description: req.body.Description,
        Content: req.body.Content,
        ParentId: req.body.ParentId,
        EcommerceId: req.body.EcommerceId,
        ImageUrl: newPath,
        
      };
      categoryService.create(category).then((result) => {
        
          res.status(200).json({
            success: true,
            data: result,
          });
        })
        .catch((err)=>{
          res.send({
            errors: {
              status: err.status || 500,
              message: err.message,
            },
          });
        });
    
    });
  }catch(err){
    return next(err);
  }

}


// Update
exports.update = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const Id = req.params.id;
    const categoriesUpdate = {
      Name: req.body.Name,
      EcommerceId: req.body.EcommerceId,
      Description: req.body.Description,
      Content: req.body.Content,
      ParentId: req.body.ParentId,
      ImageUrl: req.body.ImageUrl,
      UpdatedBy: req.body.UpdatedBy,
      UpdatedDate: Date(),
    }
    categoryService.update(Id, categoriesUpdate).then(result => {
      if (result == 1) {
        res.status(200).json({
          success: true,
          message: messageConstants.CATEGORIES_UPDATE_SUSSCESS,
          BookingsUpdate: categoriesUpdate
        });
      } else {
        res.status(404).json({
          message: result.message,
        })
      }
    }).catch(err => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message
        },
      })
    });
  } catch (err) {
    return next(err);
  }
};
//Soft delete
exports.delete = function (req, res, next) {
  const Id = req.params.id;
  const options = { field: 'Deleted', Deleted: 1, UpdatedDate: Date() };
  return categoryService.delete(Id, options).then(result => {
    if (result == true) {
      res.status(200).json({
        success: true,
        message: messageConstants.CATEGORIES_DELETED,

      });
    } else {
      res.status(404).json({
        message: result.message
      });
    }
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};
// // Delete
exports.destroy = function (req, res) {
  const Id = req.params.id;
  categoryService.destroy(Id).then(result => {
    if (result === null) {
      res.status(404).json({
        message: messageConstants.CATEGORIES_NOT_FOUND
      });
    } else {
      res.status(200).json({
        success: true,
        message: messageConstants.CATEGORIES_DELETED,
      });
    }
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};
// Restore
exports.restore = function (req, res) {
  const Id = req.params.id;
  const options = { field: 'Deleted', Deleted: 0 }
  return categoryService.restore(Id, options).then(result => {
    if (result == true) {
      res.status(200).json({
        success: true,
        message: messageConstants.CATEGORIES_RESTORE_SUSSCESS,
      });
    } else {
      res.status(404).json({
        message: result.message
      });
    }
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};

