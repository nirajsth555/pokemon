import { useState, useEffect } from "react";
import LikeIcon from "../icons/like";
import Modal from "../modal/Modal";
import Tabs from "../tabs/Tabs";
import About from "./about";
import BaseStats from "./baseStats";
import Evolution from "./evolution";
import BackIcon from "../icons/back";
import { getPokemonSpeciesByName } from "../../services/pokemon";
import { CapitalizeFirstLetter } from "../../utils/helpers";
import axios from "axios";
import config from "../../config";
import http from "../../utils/http";

export default function PokemonDetail({ handleClose, pokemon }: any) {
    const [pokemonEvoInfo, setPokemonEvoInfo] = useState(
        []
    );
    const { name, sprites, order, types, abilities, height, weight, stats } = pokemon;
    const ImageUrl = sprites?.other?.["official-artwork"]?.front_default;
    const Species = types?.map((type) => CapitalizeFirstLetter(type.type.name));
    const Abilities = abilities?.map((ab) =>
        CapitalizeFirstLetter(ab.ability.name)
    );
    const baseStats = stats?.map((stat) => {
        const statName = stat.stat.name.toLowerCase();
        const name = statName;
        return {
            name,
            value: stat.base_stat,
        };
    });
    const tabs = [
        {
            title: "About",
            content: (
                <About
                    abilities={Abilities}
                    height={height}
                    weight={weight}
                    species={Species}
                />
            )
        },
        {
            title: "Base Stats",
            content: (
                <BaseStats
                    baseStats={baseStats}
                />
            )
        },
        {
            title: "Evolution",
            content: (<Evolution evolutionInfo={pokemonEvoInfo}
                ImageUrl={ImageUrl}
                name={name} />)
        }
    ];
    const [tabIndex, setTabIndex] = useState("About");

    useEffect(() => {
        getPokemonDetail();
    }, [])

    const evolutionData = (
        evolve: [],
        evoList: []
    ) => {
        evolve.map((evo) => {
            evoList.push(evo?.species);

            if (evo?.evolves_to.length > 0) {
                evolutionData(evo?.evolves_to, evoList);
            }

            return null;
        });
        return null;
    };

    const getPokemonDetail = async () => {
        const response = await getPokemonSpeciesByName(pokemon?.species?.name).then(response => {
            return response.data;
        })
        axios.get(`${response.evolution_chain.url}`).then(res => {
            const evoList = [];
            const tempPokemonInfo = [];

            evolutionData(res.data.chain.evolves_to, evoList);

            evoList.forEach((item: { name: string; url: string }) => {
                const url = config.apiEndpoints.GET_POKEMON_DETAIL.replace(":pokemon", item.name)
                http.get(url)
                    .then((res) => {
                        if (res) {
                            const { sprites, species } = res.data;
                            const Info = {
                                name: species.name as string,
                                url: sprites?.other?.["official-artwork"]
                                    ?.front_default as string,
                            };
                            tempPokemonInfo.push(Info);
                        }
                    })
                    .catch(() => {
                        console.log("errors");
                    })
                    .finally(() => {
                        setPokemonEvoInfo(tempPokemonInfo);
                    });
            });
        })
    }

    return (
        <Modal>
            <div className="modal-header modal-Fire">
                <div className="icons">
                    <div className="back" onClick={handleClose}>
                        <BackIcon />
                    </div>
                    <div className="like like-active">
                        <LikeIcon />
                    </div>
                </div>
                <div className="modal-header--info">
                    <div>
                        <h6>#{order}</h6>
                        <h3>{CapitalizeFirstLetter(name)}</h3>
                        <div className="flex badges">

                        </div>
                    </div>
                    <div className="modal-body--img">
                        <img src={ImageUrl} alt={name} />
                    </div>
                </div>
            </div>
            <div className="modal-body">
                <div className="modal-body--tab">
                    <Tabs
                        tabs={tabs}
                        tabIndex={tabIndex}
                        setTabIndex={setTabIndex}
                        hasTitle={false}
                    />
                </div>
            </div>
        </Modal>
    )
}