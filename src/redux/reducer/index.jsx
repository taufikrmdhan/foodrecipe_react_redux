import { combineReducers } from 'redux';

import recipeReducer from './landing';

const rootReducer = combineReducers({
    recipe: recipeReducer
});

export default rootReducer;