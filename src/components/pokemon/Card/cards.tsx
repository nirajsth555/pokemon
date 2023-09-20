import { useSelector } from "react-redux";
import PokemonCard from "./card";
import { useState, useEffect } from "react";
import { TRootState } from "../../../store/reducers";
import { IPokemonState } from "../../../store/pokemons/state";
import PokemonDetail from "../detail";
import { useModal } from "../../../hooks/useModal";
import { usePokemonTeam } from "../../../hooks/usePokemonTeam";

export default function PokemonCards() {
    const { addPokemonToTeam, checkPokemonIsInTeam } = usePokemonTeam();
    const { showModal, hideModal, displayModal } = useModal();
    const [pokemonList, setPokemonList] = useState<any>([]);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const [selectedPokemon, setSelectedPokemon] = useState([]);

    const { data: pokemons, success }: IPokemonState = useSelector((state: TRootState) => state.pokemon);


    useEffect(() => {
        if (success && pokemons.length > 0) {
            const copyPokemons = [...pokemons];
            const newPokemonList = copyPokemons.slice(0, itemsPerPage);
            setPokemonList(newPokemonList)
        }
    }, [pokemons, success, itemsPerPage]);

    const handleShowMore = () => {
        const currentItemsPerPage = itemsPerPage;
        setItemsPerPage(currentItemsPerPage + 4);
    }

    const displayPokemonDetail = (pokemonDetail: any) => {
        setSelectedPokemon(pokemonDetail);
        displayModal();
    }

    return (
        <>
            {/* <div className="tabs"> */}
            <div className="mb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {pokemonList?.map((element: any, index: number) => (
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

            {showModal && <PokemonDetail handleClose={hideModal} pokemon={selectedPokemon} />}
        </>
    )
}