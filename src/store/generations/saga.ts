/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest } from "redux-saga/effects";
import { getGenerationList } from "../../services/generations";
import { actions } from "./action";
import { actionTypes } from "./constants";

function* getGenerationListSaga() {
    try {
        const response: any = yield call(getGenerationList);
        yield put(actions.getGenerationListSuccess(response));
    } catch (err: any) {
        yield put(actions.getGenerationListFinish())
    }
}

function* GenerationSaga() {
    yield takeLatest(actionTypes.GET_ALL_GENERATIONS_START, getGenerationListSaga)
}

export default GenerationSaga;