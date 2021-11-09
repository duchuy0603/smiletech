import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainReducer';
import categoriesReducer from './Category/categories';
import ecommerceReducer from './Category/ecommerce';

const store = configureStore({
    reducer: {
        mainReducer: mainReducer,
        ecommerceReducer:ecommerceReducer,
        categoriesReducer:categoriesReducer
       
    }
});

export default store;