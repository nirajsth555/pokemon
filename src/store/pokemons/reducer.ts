import { ActionWithPayload } from "../../types";
import { actionTypes } from "./constants";
import { IPokemonState, initialPokemonState } from "./state";

export const reducer = (
    state: IPokemonState = initialPokemonState,
    action: ActionWithPayload<IPokemonState>
) => {
    switch (action.type) {
        case actionTypes.GET_ALL_POKEMONS_START: {
            return {
                ...state,
                loading: true
            }
        }

        case actionTypes.GET_ALL_POKEMONS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                success: true
            }
        }

        case actionTypes.GET_ALL_POKEMONS_FINISH: {
            return {
                ...state,
                loading: false,
            }
        }

    }
    return state
}