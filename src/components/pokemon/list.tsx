import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getGenerationList } from '../../store/generations/action';
import Tabs from '../tabs/Tabs';
import { TRootState } from '../../store/reducers';
import Loader from '../loader/Loader';


export default function PokemonList() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state: TRootState) => state.generation);


    useEffect(() => {
        dispatch(getGenerationList());
    }, [])

    return (
        <>
            {loading && <Loader />}
            {!loading && <Tabs />}

        </>
    )
}