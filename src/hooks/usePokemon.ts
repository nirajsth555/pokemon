import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../store/pokemons/action";
import { IPokemonState } from "../store/pokemons/state";
import { TRootState } from "../store/reducers";

export function usePokemon() {
    const dispatch = useDispatch();

    const { data: pokemons, loading }: IPokemonState = useSelector((state: TRootState) => state.pokemon);

    const getPokemonListByGeneration = (generation: number | string) => {
        dispatch(getPokemonList(generation));
    }

    return {
        pokemons,
        getPokemonListByGeneration,
        loading
    }
}