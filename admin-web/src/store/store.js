import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainReducer';
import categoriesReducer from './Category/categories';
import ecommerceReducer from './Category/ecommerce';
import teamReducer from './Category/team';
import brandReducer from './Category/brand';
import propertyReducer from './Category/property';
const store = configureStore({
    reducer: {
        mainReducer: mainReducer,
        ecommerceReducer:ecommerceReducer,
        categoriesReducer:categoriesReducer,
        teamReducer:teamReducer,
        brandReducer:brandReducer,
        propertyReducer:propertyReducer
       
    }
});

export default store;