import feesApi from '../../api/Category/feesApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const getAllFees = createAsyncThunk('fees/getAllFees', async () => {    
    const listData = await feesApi.getAll();
    return listData;
});

export const createFees = createAsyncThunk('fees/createFees', async (newData, thunkAPI) => {    
    await feesApi.create(newData);
    thunkAPI.dispatch(getAllFees());
    
});

export const editFees = createAsyncThunk('fees/editFees', async (dataEdited, thunkAPI) => {    
    await feesApi.edit(dataEdited);
    thunkAPI.dispatch(getAllFees());
});

export const deleteFees = createAsyncThunk('fees/deleteFees', async (id, thunkAPI) => {    
    await feesApi.delete(id);
    thunkAPI.dispatch(getAllFees());
    
});

const feesSlice = createSlice({
    name: 'feesSlice',
    initialState: {
        loadingFees: false,
        feesList: [],
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getAllFees.pending]: (state) => { 
            state.loadingFees = true;
        },

        [getAllFees.rejected]: (state, action) => { 
            state.loadingFees = false;
            state.error = action.error;
        },

        [getAllFees.fulfilled]: (state, action) => { 
            state.loadingFees = false;
            state.feesList = action.payload;
        },
    },
})

const {reducer: feesReducer} = feesSlice;
export default feesReducer;