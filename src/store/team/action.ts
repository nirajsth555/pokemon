import { actionTypes } from "./constants";

export const getPokemonTeam = () => ({
    type: actionTypes.GET_POKEMON_TEAM
})

export const addPokemonTeam = (data: any) => ({
    type: actionTypes.ADD_POKEMON_TEAM,
    payload: data
})