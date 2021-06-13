import { obj } from 'duplexify';
import React from 'react';
import {combineReducers} from 'redux';
import saveReducers from '../reducers/saveReducers'
import objReducer from './objReducer';

const rootReducers = combineReducers(
    {
        saveR: saveReducers,
        saveObj: objReducer
    }
)

export default rootReducers;