import { useEffect, useState } from "react";
import Pokeball from "../../../assets/images/pokeball.png";
import { getPokemonDetailByName } from "../../../services/pokemon";
import PokemonType from "../types";
import { CapitalizeFirstLetter } from "../../../utils/helpers";

export default function PokemonCard({ pokemon, isInTeam, handleAddTeam }: any) {
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

    const pokemonImage = pokemonDetail?.sprites?.other?.["official-artwork"]?.front_shiny || Pokeball;
    const pokemonType = pokemonDetail?.types?.[Math.floor(Math.random() * pokemonDetail?.types?.length)]?.type?.name;

    return (
        <div className={`card card-${CapitalizeFirstLetter(pokemonType)}`}>
            <div className="card-action">
                <div
                    className={`card-action--like card-${isInTeam ? "active" : ""}`}
                    onClick={() => {
                        handleAddTeam(pokemon)
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#fff"
                        role="img"
                        className="icon fill-current shot-tools-icon"
                    >
                        <path
                            d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                            stroke="#dc3649"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="transparent"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="card-body">
                <h6>#10</h6>
                <h3>{pokemon?.name}</h3>
                <div className="card-img">
                    <img src={pokemonImage} alt={""} />
                </div>
                <div className="card-body--spec">
                    {pokemonDetail?.types?.map((element: any, index: number) => (
                        <PokemonType type={element?.type?.name} key={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}