import competitionClassApi from '../../api/Category/competitionClassApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const getAllCompetitionClass = createAsyncThunk('competitionClass/getAllCompetitionClass', async () => {    
    const listData = await competitionClassApi.getAll();
    return listData;
});

export const createCompetitionClass = createAsyncThunk('competitionClass/createCompetitionClass', async (newData, thunkAPI) => {    
    await competitionClassApi.create(newData);
    thunkAPI.dispatch(getAllCompetitionClass());
    
});

export const editCompetitionClass = createAsyncThunk('competitionClass/editCompetitionClass', async (dataEdited, thunkAPI) => {    
    await competitionClassApi.edit(dataEdited);
    thunkAPI.dispatch(getAllCompetitionClass());
});

export const deleteCompetitionClass = createAsyncThunk('competitionClass/deleteCompetitionClass', async (id, thunkAPI) => {    
    await competitionClassApi.delete(id);
    thunkAPI.dispatch(getAllCompetitionClass());
    
}); 

export const getAllPreparedCompetitionClass = createAsyncThunk('competitionClass/getAllPreparedCompetitionClass', async () => {    
    const listPrepared = await competitionClassApi.getAllPrepared();
    return listPrepared;
});

const competitionClassSlice = createSlice({
    name: 'competitionClassSlice',
    initialState: {
        loadingCompetitionClass: false,
        competitionClassList: [],
        loadingCompetitionClassPrepared: false,
        competitionClassPrepared: [],
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getAllCompetitionClass.pending]: (state) => { 
            state.loadingCompetitionClass = true;
        },

        [getAllCompetitionClass.rejected]: (state, action) => { 
            state.loadingCompetitionClass = false;
            state.error = action.error;
        },

        [getAllCompetitionClass.fulfilled]: (state, action) => { 
            state.loadingCompetitionClass = false;
            state.competitionClassList = action.payload;
        },

        [getAllPreparedCompetitionClass.pending]: (state) => {   
            state.loadingCompetitionClassPrepared = true;
        },

        [getAllPreparedCompetitionClass.rejected]: (state, action) => { 
            state.loadingCompetitionClassPrepared = false;
            state.error = action.error;
        },

        [getAllPreparedCompetitionClass.fulfilled]: (state, action) => { 
            state.loadingCompetitionClassPrepared = false;
            state.competitionClassPrepared = action.payload;
        },
    },
})

const {reducer: competitionClassReducer} = competitionClassSlice;
export default competitionClassReducer;