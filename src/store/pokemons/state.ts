import { IPokemon } from "../../types"

export const initialPokemonState: IPokemonState = {
    loading: false,
    success: false,
    data: []
}

export interface IPokemonState {
    loading?: boolean,
    success?: boolean,
    data?: IPokemon[]
}