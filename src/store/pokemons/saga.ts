/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest, select } from "redux-saga/effects";
import { actionTypes } from "./constants";
import { getPokemonListSuccess, getPokemonListFinish } from "./action";
import { getPokemonListByGenerationId } from "../../services/pokemon";
import { ActionModel } from "../../types";

function* getPokemonListSaga(action: ActionModel) {
    try {
        const params = action.payload;
        const response: any = yield call(getPokemonListByGenerationId, params?.generationId);
        yield put(getPokemonListSuccess(response?.data?.results));
    } catch (err: any) {
        yield put(getPokemonListFinish())
    }
}

function* GenerationSaga() {
    yield takeLatest(actionTypes.GET_ALL_POKEMONS_START, getPokemonListSaga)
}

export default GenerationSaga;