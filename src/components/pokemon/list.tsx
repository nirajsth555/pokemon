import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getGenerationList } from '../../store/generations/action';
import Tabs from '../tabs/Tabs';
import { TRootState } from '../../store/reducers';
import Loader from '../loader/Loader';
import InputSelect, { TOption } from '../common/InputSelect';
import { IGenerationState } from '../../store/generations/state';
import { convertRomanToNumber } from '../../utils/helpers';
import { getPokemonList } from '../../store/pokemons/action';
import PokemonCards from './Card/cards';


export default function PokemonList() {
    const dispatch = useDispatch();
    const [selectedGeneration, setSelectedGeneration] = useState("");
    const [generationList, setGenerationList] = useState<TOption[]>([]);
    const { data, success }: IGenerationState = useSelector((state: TRootState) => state.generation);

    useEffect(() => {
        dispatch(getGenerationList());
    }, [dispatch]);

    useEffect(() => {
        if (success && data?.length > 0) {
            const generations = data?.map(element => ({
                label: element.name.replace("generation-", "").toUpperCase(),
                value: convertRomanToNumber(element.name.replace("generation-", "").toUpperCase()).toString()
            }));
            setSelectedGeneration(generations[0]?.value || "")
            setGenerationList(generations)
        }
    }, [success, data]);

    useEffect(() => {
        if (selectedGeneration) {
            dispatch(getPokemonList(selectedGeneration))
        }
    }, [selectedGeneration, dispatch]);

    return (
        <>
            {/* {loading && <Loader />} */}
            <InputSelect
                option={generationList}
                label='Select Generation'
                handleChange={(selectedGeneration: string) => setSelectedGeneration(selectedGeneration)}
            />
            <PokemonCards />
            {/* <PokemonList /> */}

        </>
    )
}