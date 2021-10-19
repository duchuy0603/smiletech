import danceApi from '../../api/Category/danceApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const getAllDance = createAsyncThunk('dance/getAllDance', async () => {    
    const listData = await danceApi.getAll();
    return listData;
});

export const createDance = createAsyncThunk('dance/createDance', async (newData, thunkAPI) => {    
    await danceApi.create(newData);
    thunkAPI.dispatch(getAllDance());
    
});

export const editDance = createAsyncThunk('dance/editDance', async (dataEdited, thunkAPI) => {    
    await danceApi.edit(dataEdited);
    thunkAPI.dispatch(getAllDance());
});

export const deleteDance = createAsyncThunk('dance/deleteDance', async (id, thunkAPI) => {    
    await danceApi.delete(id);
    thunkAPI.dispatch(getAllDance());
    
});

const danceSlice = createSlice({
    name: 'danceSlice',
    initialState: {
        loadingDance: false,
        danceList: [],
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getAllDance.pending]: (state) => { 
            state.loadingDance = true;
        },

        [getAllDance.rejected]: (state, action) => { 
            state.loadingDance = false;
            state.error = action.error;
        },

        [getAllDance.fulfilled]: (state, action) => { 
            state.loadingDance = false;
            state.danceList = action.payload;
        },
    },
})

const {reducer: danceReducer} = danceSlice;
export default danceReducer;