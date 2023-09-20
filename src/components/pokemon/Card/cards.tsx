import PokemonCard from "./card";
import { useState, useEffect } from "react";
import PokemonDetail from "../detail";
import { useModal } from "../../../hooks/useModal";
import { usePokemonTeam } from "../../../hooks/usePokemonTeam";
import { usePokemon } from "../../../hooks/usePokemon";
import { IPokemon } from "../../../types";

export default function PokemonCards() {
    const { addPokemonToTeam, checkPokemonIsInTeam } = usePokemonTeam();
    const { pokemons } = usePokemon();
    const { showModal, hideModal, displayModal } = useModal();
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>();

    useEffect(() => {
        if (pokemons.length > 0) {
            const copyPokemons = [...pokemons];
            const newPokemonList = copyPokemons.slice(0, itemsPerPage);
            setPokemonList(newPokemonList)
        }
    }, [pokemons, itemsPerPage]);

    const handleShowMore = () => {
        const currentItemsPerPage = itemsPerPage;
        setItemsPerPage(currentItemsPerPage + 4);
    }

    const displayPokemonDetail = (pokemonDetail: IPokemon) => {
        setSelectedPokemon(pokemonDetail);
        displayModal();
    }

    return (
        <>
            {/* <div className="tabs"> */}
            <div className="mb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {pokemonList?.map((element: IPokemon, index: number) => (
                        <PokemonCard
                            key={index}
                            pokemon={element}
                            handleAddTeam={addPokemonToTeam}
                            handleCardClick={displayPokemonDetail}
                            isInTeam={checkPokemonIsInTeam(element?.name)}
                        />
                    ))}
                </div>
                <div className="text-center">
                    {pokemonList.length !== pokemons.length && <button onClick={handleShowMore}>
                        Show More
                    </button>}
                </div>
            </div>

            {showModal &&
                <PokemonDetail
                    handleClose={hideModal}
                    pokemon={selectedPokemon as IPokemon}
                    isInTeam={checkPokemonIsInTeam(selectedPokemon?.name as string)}
                />}
        </>
    )
}