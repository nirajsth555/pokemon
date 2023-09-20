import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGenerationState } from "../store/generations/state";
import { TRootState } from "../store/reducers";
import { getGenerationList } from '../store/generations/action';
import { CapitalizeFirstLetter, convertRomanToNumber } from "../utils/helpers";

export function useGeneration() {
    const dispatch = useDispatch();
    const [generationOptions, setGenerationOptions] = useState<any>([]);

    const { data: generationList }: IGenerationState = useSelector((state: TRootState) => state.generation);

    const getGeneration = () => {
        dispatch(getGenerationList());
    }

    useEffect(() => {
        const generations = generationList?.map(element => ({
            label: CapitalizeFirstLetter(element.name),
            value: convertRomanToNumber(element.name.replace("generation-", "").toUpperCase()).toString()
        }));
        setGenerationOptions(generations);
    }, [generationList])

    return {
        getGeneration,
        generationList,
        generationOptions
    }
} 