import { IPokemon } from "../../types"

export const initialPokemonTeamState: IPokemonTeamState = {
    // loading: false,
    // success: false,
    data: []
}

export interface IPokemonTeamState {
    // loading: boolean,
    // success: boolean,
    data: IPokemon[]
}