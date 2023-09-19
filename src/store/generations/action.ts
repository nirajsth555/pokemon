/* eslint-disable @typescript-eslint/no-explicit-any */
import { actionTypes } from "./constants";

// export const actions = {
//     getGenerationList: () => ({
//         type: actionTypes.GET_ALL_GENERATIONS_START
//     }),
//     getGenerationListSuccess: (data: any) => ({
//         type: actionTypes.GET_ALL_GENERATIONS_SUCCESS,
//         payload: data
//     }),
//     getGenerationListFinish: () => ({
//         type: actionTypes.GET_ALL_GENERATIONS_FINISH
//     })
// }

export const getGenerationList = () => ({
    type: actionTypes.GET_ALL_GENERATIONS_START
})
export const getGenerationListSuccess = (data: any) => ({
    type: actionTypes.GET_ALL_GENERATIONS_SUCCESS,
    payload: data
})
export const getGenerationListFinish = () => ({
    type: actionTypes.GET_ALL_GENERATIONS_FINISH
})