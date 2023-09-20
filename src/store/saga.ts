import { all, fork } from "redux-saga/effects";
import GenerationSaga from "./generations/saga";
import PokemonSaga from "./pokemons/saga";

export default function* rootSaga() {
    yield all([
        fork(GenerationSaga),
        fork(PokemonSaga)
    ])
}