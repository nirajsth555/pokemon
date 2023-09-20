/* eslint-disable */
const config = {
    apiBaseURI: import.meta.env.VITE_REACT_APP_API_BASE_URI,
    apiEndpoints: {
        GET_GENERATIONS_LIST: "/generation",
        GET_POKEMON_LIST_BY_GENERATION: "/generation/:generationId",
        GET_POKEMON_DETAIL: "/pokemon/:pokemon",
        GET_POKEMON_SPECIES_DETAILS: "/pokemon-species/:pokemon",
        GET_EVOLUTION_DETAILS: "/evolution-chain"
    }
}

export default config;