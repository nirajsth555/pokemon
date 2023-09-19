import { IGeneration } from "../../types"

export const initialGenerationState: IGenerationState = {
    loading: false,
    success: false,
    data: []
}

export interface IGenerationState {
    loading: boolean,
    success: boolean,
    data: IGeneration[]
}