import CategoriesAPI from "../../api/Category/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const categoriesgetAll = createAsyncThunk('categories/categoriesgetAll', async () => {
    const listcategories = await CategoriesAPI.getAll();
    return listcategories;
})
export const categoriesAdd = createAsyncThunk('categories/categoriesgetAdd', async (data,thunkAPI) => {
    await CategoriesAPI.create(data);
    thunkAPI.dispatch(categoriesgetAll())
})
export const categoriesgetEdit = createAsyncThunk('categories/categoriesgetEdit', async (data,thunkAPI) => {
    await CategoriesAPI.Edit(data);
    thunkAPI.dispatch(categoriesgetAll())
})
export const categoriesgetDelete = createAsyncThunk('categories/categoriesgetDelete', async (Id,thunkAPI) => {
    await CategoriesAPI.Delete(Id);
    thunkAPI.dispatch(categoriesgetAll())
})

const categoriesslide = createSlice({
    name: "categoriesslide",
    initialState: {
        loadingcategories: false,
        categorieslist: [],
        error: ''

    },
    reducers: {},
    extraReducers: {
        [categoriesgetAll.pending]: (state, action) => {
            state.loadingcategories = true;
        },
        [categoriesgetAll.rejected]: (state, action) => {
            state.loadingcategories = false;
        },
        [categoriesgetAll.fulfilled]: (state, action) => {
            state.loadingcategories=false;
           state.categorieslist=action.payload
        },
    }
})
const { reducer: categoriesReducer } = categoriesslide;
export default categoriesReducer;
