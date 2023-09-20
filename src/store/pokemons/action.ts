/* eslint-disable @typescript-eslint/no-explicit-any */
import { actionTypes } from "./constants";

export const getPokemonList = (generationId: string | number) => ({
    type: actionTypes.GET_ALL_POKEMONS_START,
    payload: { generationId }
})
export const getPokemonListSuccess = (data: any) => ({
    type: actionTypes.GET_ALL_POKEMONS_SUCCESS,
    payload: data
})
export const getPokemonListFinish = () => ({
    type: actionTypes.GET_ALL_POKEMONS_FINISH
})