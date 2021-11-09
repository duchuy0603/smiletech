const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const { validate } = require("../middlewares/validators");
// const checkAuthMiddleware= require('../middlewares/checkAuth');
// const {signAccessToken}= require('../helper/jwt');

router.get("/", categoriesController.get);
router.get("/products/:id", categoriesController.getProductsByCategoryId);
router.get("/products/", categoriesController.getAllProductByCategory);
router.get("/:id", categoriesController.getbyID);
router.put(
  "/:id",
  validate.validateCreateCategories(),
  categoriesController.update
);
router.delete("/:id", categoriesController.delete);
router.delete("/delete/:id", categoriesController.destroy);
router.post("/",validate.validateCreateCategories(),categoriesController.create
);
router.get("/restore/:id", categoriesController.restore);

module.exports = router;
