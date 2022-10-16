import { combineReducers } from 'redux';

import recipeReducer from './recipe';
import addRecipeReducer from './addrecipe';

const rootReducer = combineReducers({
    recipe: recipeReducer,
    addRecipe: addRecipeReducer,
});

export default rootReducer;