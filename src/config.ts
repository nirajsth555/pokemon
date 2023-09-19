/* eslint-disable */
const config = {
    apiBaseURI: process.env.REACT_APP_API_BASE_URI,
    apiEndpoints: {
        GET_GENERATIONS_LIST: "/generations",
        GET_POKEMON_DETAIL: "/pokemon",
        GET_POKEMON_SPECIES_DETAILS: "/pokemon-species",
        GET_EVOLUTION_DETAILS: "/evolution-chain"
    }
}

export default config;