/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest, select } from "redux-saga/effects";
import { getGenerationList, } from "../../services/generations";
import { actionTypes } from "./constants";
import { getGenerationListSuccess, getGenerationListFinish } from "./action";

function* getGenerationListSaga() {
    try {
        // const data = yield select((state) => state.generation.data);
        // if (data?.length > 0) {
        //     yield put(getGenerationListSuccess(data));
        //     return
        // }
        const response: any = yield call(getGenerationList);
        yield put(getGenerationListSuccess(response?.data?.results));
    } catch (err: any) {
        yield put(getGenerationListFinish())
    }
}

function* GenerationSaga() {
    yield takeLatest(actionTypes.GET_ALL_GENERATIONS_START, getGenerationListSaga)
}

export default GenerationSaga;