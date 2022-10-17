import { combineReducers } from 'redux';

import recipeReducer from './recipe';
import addRecipeReducer from './addrecipe';
// import userReducer from './user';

const rootReducer = combineReducers({
    recipe: recipeReducer,
    addRecipe: addRecipeReducer,
    // user: userReducer,
});

export default rootReducer;