import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import teamsReducer from './team/reducer.js';


const logger = createLogger({
    collapsed: true,
    diff: true
});

export const store = configureStore({
    middleware: [logger],
    reducer: {
        team: teamsReducer
    }
});
