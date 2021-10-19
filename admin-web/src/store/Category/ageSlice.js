import ageApi from '../../api/Category/ageApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const getAllAge = createAsyncThunk('age/getAllAge', async () => {    //'age/getAllAge' là tên của getAllAge thôi
    const listData = await ageApi.getAll();
    return listData;
});

export const createAge = createAsyncThunk('age/createAge', async (newData, thunkAPI) => {    
    await ageApi.create(newData);
    thunkAPI.dispatch(getAllAge());
});

export const editAge = createAsyncThunk('age/editAge', async (dataEdited, thunkAPI) => {    
    await ageApi.edit(dataEdited);
    thunkAPI.dispatch(getAllAge());
});

export const deleteAge = createAsyncThunk('age/deleteAge', async (id, thunkAPI) => {    
    await ageApi.delete(id);
    thunkAPI.dispatch(getAllAge());
});

const ageSlice = createSlice({
    name: 'ageSlice',
    initialState: {
        loadingAge: false,
        ageList: [],
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getAllAge.pending]: (state) => {   //trạng thái đang chạy
            state.loadingAge = true;
        },

        [getAllAge.rejected]: (state, action) => { //xảy ra lỗi
            state.loadingAge = false;
            state.error = action.error;
        },

        [getAllAge.fulfilled]: (state, action) => {  //thành công
            state.loadingAge = false;
            state.ageList = action.payload;
        },
    },
})

const {reducer: ageReducer} = ageSlice;
export default ageReducer;