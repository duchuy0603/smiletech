import categoryContentApi from '../../api/Category/categoryContentApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const getAllCategoryContent = createAsyncThunk('categoryContent/getAllCategoryContent', async () => {    
    const listData = await categoryContentApi.getAll();
    return listData;
});

export const createCategoryContent = createAsyncThunk('categoryContent/createCategoryContent', async (newData, thunkAPI) => {    
    await categoryContentApi.create(newData);
    thunkAPI.dispatch(getAllCategoryContent());
    
});

export const editCategoryContent = createAsyncThunk('categoryContent/editCategoryContent', async (dataEdited, thunkAPI) => {    
    await categoryContentApi.edit(dataEdited);
    thunkAPI.dispatch(getAllCategoryContent());
});

export const deleteCategoryContent = createAsyncThunk('categoryContent/deleteCategoryContent', async (id, thunkAPI) => {    
    await categoryContentApi.delete(id);
    thunkAPI.dispatch(getAllCategoryContent());
    
});

export const getAllPreparedCategoryContent = createAsyncThunk('categoryContent/getAllPreparedCategoryContent', async () => {    
    const listPrepared = await categoryContentApi.getAllPrepared();
    return listPrepared;
});

const categoryContentSlice = createSlice({
    name: 'categoryContentSlice',
    initialState: {
        loadingCategoryContent: false,
        categoryContentList: [],
        loadingCategoryContentPrepared: false,
        categoryContentPrepared: [],
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getAllCategoryContent.pending]: (state) => {   //trạng thái đang chạy
            state.loadingCategoryContent = true;
        },

        [getAllCategoryContent.rejected]: (state, action) => { //xảy ra lỗi
            state.loadingCategoryContent = false;
            state.error = action.error;
        },

        [getAllCategoryContent.fulfilled]: (state, action) => {  //thành công
            state.loadingCategoryContent = false;
            state.categoryContentList = action.payload;
        },

        [getAllPreparedCategoryContent.pending]: (state) => {   
            state.loadingCategoryContentPrepared = true;
        },

        [getAllPreparedCategoryContent.rejected]: (state, action) => { 
            state.loadingCategoryContentPrepared = false;
            state.error = action.error;
        },

        [getAllPreparedCategoryContent.fulfilled]: (state, action) => { 
            state.loadingCategoryContentPrepared = false;
            state.categoryContentPrepared = action.payload;
        },
    },
})

const {reducer: categoryContentReducer} = categoryContentSlice;
export default categoryContentReducer;