import { combineReducers } from "redux";

import { reducer as GenerationReducer } from "./generations/reducer";

const rootReducer = combineReducers({
    generation: GenerationReducer
});

export default rootReducer;