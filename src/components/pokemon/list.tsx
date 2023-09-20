import { useEffect, useState } from "react";
import InputSelect from '../common/InputSelect';
import PokemonCards from './Card/cards';
import { useGeneration } from '../../hooks/useGeneration';
import { usePokemon } from '../../hooks/usePokemon';

export default function PokemonList() {
    const { getGeneration, generationOptions } = useGeneration();
    const { getPokemonListByGeneration } = usePokemon();
    const [selectedGeneration, setSelectedGeneration] = useState("");

    useEffect(() => {
        getGeneration();
    }, []);

    useEffect(() => {
        setSelectedGeneration(generationOptions?.[0]?.value)
    }, [generationOptions])

    useEffect(() => {
        if (selectedGeneration) {
            getPokemonListByGeneration(selectedGeneration);
        }
    }, [selectedGeneration]);

    return (
        <>
            <InputSelect
                option={generationOptions}
                label='Select Generation'
                handleChange={(selectedGeneration: string) => setSelectedGeneration(selectedGeneration)}
            />
            <PokemonCards />

        </>
    )
}