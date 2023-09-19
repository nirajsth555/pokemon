import { combineReducers } from "redux";

import { reducer as GenerationReducer } from "./generations/reducer";
import { reducer as PokemonReducer } from "./pokemons/reducer";

const rootReducer = combineReducers({
    generation: GenerationReducer,
    pokemon: PokemonReducer
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;