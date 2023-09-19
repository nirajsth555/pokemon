import { useEffect, useState } from "react";
import Pokeball from "../../../assets/images/pokeball.png";
import { getPokemonDetailByName } from "../../../services/pokemon";
import PokemonType from "../types";

export default function PokemonCard({ pokemon }: any) {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonDetail, setPokemonDetail] = useState<any>([]);

    useEffect(() => {
        const getDetail = async () => {
            try {
                const { data } = await getPokemonDetailByName(pokemon?.name);
                setPokemonDetail(data);
            } catch (err) {
                console.log(err)
            }

        };

        if (pokemon?.name) {
            getDetail();
        }
    }, [pokemon])

    const pokemonImage = pokemonDetail?.sprites?.other?.["official-artwork"]?.front_shiny

    return (
        <div className="card">
            <div className="card-img">
                <img src={pokemonImage ?? Pokeball} alt="pokemon" />
            </div>
            <div className="card-body">
                <h6>#10</h6>
                <h3>{pokemon?.name}</h3>
                <div className="pokemon-species">
                    {pokemonDetail?.types?.map((element: any, index: number) => (
                        <PokemonType type={element?.type?.name} key={index} />
                    ))}

                </div>
                <div className="button button-info">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        role="img"
                        className="icon fill-current shot-tools-icon"
                    >
                        <path
                            d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                            fill="white"
                        ></path>
                    </svg>
                    View
                </div>
            </div>
        </div>
    )
}