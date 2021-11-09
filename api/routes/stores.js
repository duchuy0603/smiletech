const express= require ('express');
const router = express.Router();
const storesController= require('../controllers/storesController');
const { validate } = require('../middlewares/validators');
const checkAuthMiddleware= require('../middlewares/jwt_token');

router.get('/',storesController.get);
router.get('/all-paging',storesController.getallpaging);
router.get('/orders',storesController.getOrders);
router.get('/notifications',storesController.getNotifications)
router.get('/:id',storesController.getbyID);
router.put('/:id',storesController.update);
router.delete('/:id',storesController.delete);
router.delete('/delete/:id',storesController.destroy);
router.post('/',storesController.create);  
router.get('/restore/:id',storesController.restore);

module.exports= router;