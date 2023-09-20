import config from "../config"
import http from "../utils/http"

export const getGenerationList = async () => {
    return await http.get(config.apiEndpoints.GET_GENERATIONS_LIST)
}