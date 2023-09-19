import { useSelector } from "react-redux";
import PokemonCard from "./card";
import { useState, useEffect } from "react";
import { TRootState } from "../../../store/reducers";
import { IPokemonState } from "../../../store/pokemons/state";

export default function PokemonCards() {
    const [pokemonList, setPokemonList] = useState<any>([]);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const { data: pokemons, success }: IPokemonState = useSelector((state: TRootState) => state.pokemon)

    useEffect(() => {
        if (success && pokemons.length > 0) {
            const copyPokemons = [...pokemons];
            const newPokemonList = copyPokemons.slice(0, itemsPerPage);
            console.log(newPokemonList);
            setPokemonList(newPokemonList)
        }
    }, [pokemons, success, itemsPerPage]);

    const handleShowMore = () => {
        const currentItemsPerPage = itemsPerPage;
        setItemsPerPage(currentItemsPerPage + 4);
    }

    return (
        <>
            <div className="mb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {pokemonList?.map((element: any, index: number) => (
                        <PokemonCard key={index} pokemon={element} />
                    ))}
                </div>
                <div className="text-center">
                    {pokemonList.length !== pokemons.length && <button onClick={handleShowMore}>
                        Show More
                    </button>}
                </div>
            </div>
        </>
    )
}