import { ActionWithPayload } from "../../types";
import { actionTypes } from "./constants";
import { IPokemonTeamState, initialPokemonTeamState } from "./state";

export const reducer = (
    state: IPokemonTeamState = initialPokemonTeamState,
    action: ActionWithPayload<IPokemonTeamState>
) => {
    switch (action.type) {
        case actionTypes.GET_POKEMON_TEAM: {
            return {
                ...state,
            }
        }

        case actionTypes.ADD_POKEMON_TEAM: {
            return {
                ...state,
                data: action.payload,
                // success: true
            }
        }

    }
    return state
}