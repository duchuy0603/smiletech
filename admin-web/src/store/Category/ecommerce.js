import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import ecommerceApi from "../../api/Ecommerce/ecommerce";
export const ecommercegetAll = createAsyncThunk('ecommerce/ecommercegetAll', async () => {
    const listecommerce = await ecommerceApi.getAll();
   console.log(listecommerce)
    return listecommerce;
    
})
const ecommerceslide = createSlice({
    name: "ecommerceSlide",
    initialState: {
        ecommercelist: [],
        loadingecom: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [ecommercegetAll.pending]: (state, action) => {
            state.loadingecom = true;
        },
        [ecommercegetAll.rejected]: (state, action) => {
                  state.loadingecom=false
        },
        [ecommercegetAll.fulfilled]: (state, action) => {
            
                 state.ecommercelist=action.payload;
                 state.loadingecom=false;
         },
    }
})
const {reducer:ecommerceReducer}=ecommerceslide;
export default ecommerceReducer;