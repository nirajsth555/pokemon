import config from "../config"
import http from "../utils/http"

export const getPokemonListByGenerationId = async (generationId: string) => {
    const url = config.apiEndpoints.GET_POKEMON_LIST_BY_GENERATION.replace(":generationId", generationId);
    return await http.get(url)
}

export const getPokemonDetailByName = async (pokemonName: string) => {
    const url = config.apiEndpoints.GET_POKEMON_DETAIL.replace(":pokemon", pokemonName);
    return await http.get(url);
}