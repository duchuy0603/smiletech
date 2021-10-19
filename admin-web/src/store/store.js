import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainReducer';

import ecommerceReducer from './Category/ecommerce';

const store = configureStore({
    reducer: {
        mainReducer: mainReducer,
        ecommerceReducer:ecommerceReducer
       
    }
});

export default store;