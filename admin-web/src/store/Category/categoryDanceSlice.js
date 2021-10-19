import categoryDanceApi from '../../api/Category/categoryDanceApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const getAllCategoryDance = createAsyncThunk('categoryDance/getAllCategoryDance', async () => {
    const listData = await categoryDanceApi.getAll();
    return listData;
});

export const createCategoryDance = createAsyncThunk('categoryDance/createCategoryDance', async (newData, thunkAPI) => {    
    await categoryDanceApi.create(newData);
    thunkAPI.dispatch(getAllCategoryDance());
    
});

export const editCategoryDance = createAsyncThunk('categoryDance/editCategoryDance', async (dataEdited, thunkAPI) => {    
    await categoryDanceApi.edit(dataEdited);
    thunkAPI.dispatch(getAllCategoryDance());
});

export const deleteCategoryDance = createAsyncThunk('categoryDance/deleteCategoryDance', async (id, thunkAPI) => {    
    await categoryDanceApi.delete(id);
    thunkAPI.dispatch(getAllCategoryDance());
    
});

const categoryDanceSlice = createSlice({
    name: 'categoryDanceSlice',
    initialState: {
        loadingCategoryDance: false,
        categoryDanceList: [],
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getAllCategoryDance.pending]: (state) => { 
            state.loadingCategoryDance = true;
        },

        [getAllCategoryDance.rejected]: (state, action) => { 
            state.loadingCategoryDance = false;
            state.error = action.error;
        },

        [getAllCategoryDance.fulfilled]: (state, action) => { 
            state.loadingCategoryDance = false;
            state.categoryDanceList = action.payload;
        },
    },
})

const {reducer: categoryDanceReducer} = categoryDanceSlice;
export default categoryDanceReducer;