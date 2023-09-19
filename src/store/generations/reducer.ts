import { ActionWithPayload } from "../../types";
import { actionTypes } from "./constants";
import { IGenerationState, initialGenerationState } from "./state";

export const reducer = (
    state: IGenerationState = initialGenerationState,
    action: ActionWithPayload<IGenerationState>
) => {
    switch (action.type) {
        case actionTypes.GET_ALL_GENERATIONS_START: {
            return {
                ...state,
                loading: true
            }
        }

        case actionTypes.GET_ALL_GENERATIONS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        }

        case actionTypes.GET_ALL_GENERATIONS_FINISH: {
            return {
                ...state,
                loading: false
            }
        }

    }
    return state
}