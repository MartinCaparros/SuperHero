import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    teams:[],
    currentTeam:[]
}

const simpleState = key => (state, { payload }) => {
    state[key] = payload;
};


const teamSlice = createSlice({
    name:'team',
    initialState,
    reducers:{
        setTeam:simpleState('teams'),
        setCurrentTeam:simpleState('currentTeam')
    }
});

export const {setTeam,setCurrentTeam} = teamSlice.actions;

export default teamSlice.reducer;