import { combineReducers } from "redux";

import { reducer as GenerationReducer } from "./generations/reducer";
import { reducer as PokemonReducer } from "./pokemons/reducer";
import { reducer as TeamReducer } from "./team/reducer";

const rootReducer = combineReducers({
    generation: GenerationReducer,
    pokemon: PokemonReducer,
    team: TeamReducer
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;