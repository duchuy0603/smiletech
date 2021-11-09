const express= require ('express');
const router = express.Router();
const usersController= require('../controllers/usersController');
const { validate } = require('../middlewares/validators');
const checkAuthMiddleware= require('../middlewares/jwt_token');
router.get('/',checkAuthMiddleware.checkAccessToken,usersController.get);
router.get('/all-paging',checkAuthMiddleware.checkAccessToken,usersController.getallpaging);
router.get('/roles',checkAuthMiddleware.checkAccessToken,usersController.getRoles);
router.get('/stores',checkAuthMiddleware.checkAccessToken,usersController.getStores);
router.get('/:id',checkAuthMiddleware.checkAccessToken,usersController.getbyID);
router.put('/:id',checkAuthMiddleware.checkAccessToken,validate.validateRegisterUser(),usersController.update);
router.delete('/:id',checkAuthMiddleware.checkAccessToken,usersController.delete);
router.delete('/delete/:id',checkAuthMiddleware.checkAccessToken,usersController.destroy);
router.post('/register',validate.validateRegisterUser(),usersController.register);  
router.post('/login',validate.validateCheckLogin(),usersController.login);
router.get('/restore/:id',checkAuthMiddleware.checkAccessToken,usersController.restore);
router.put('/reset-password/:id',validate.validateRegisterUser(),usersController.resetpassword);

module.exports= router;