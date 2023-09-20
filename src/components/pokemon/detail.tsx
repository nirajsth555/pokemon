/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import LikeIcon from "../icons/like";
import Modal from "../modal/Modal";
import Tabs from "../tabs/Tabs";
import About from "./Detail/about";
import BaseStats from "./Detail/baseStats";
import Evolution from "./Detail/evolution";
import BackIcon from "../icons/back";
import { CapitalizeFirstLetter } from "../../utils/helpers";
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies";
import { IPokemon } from "../../types";
import { usePokemonTeam } from "../../hooks/usePokemonTeam";

type TPokemonDetailProps = {
    handleClose: () => void,
    pokemon: IPokemon,
    isInTeam: boolean
}

export default function PokemonDetail({ handleClose, pokemon, isInTeam }: TPokemonDetailProps) {
    const { addPokemonToTeam } = usePokemonTeam();
    const { getPokemonSpeciesByName, getPokemonEvolutionChain, pokemonEvoInfo } = usePokemonSpecies();
    const { name, sprites, order, types, abilities, height, weight, stats } = pokemon;
    const ImageUrl = sprites?.other?.["official-artwork"]?.front_default;
    const Species = types?.map((type: any) => CapitalizeFirstLetter(type.type.name));
    const Abilities = abilities?.map((ab: any) =>
        CapitalizeFirstLetter(ab.ability.name)
    );
    const baseStats = stats?.map((stat: any) => {
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

    const getPokemonDetail = async () => {
        const data = await getPokemonSpeciesByName(pokemon?.species?.name);
        getPokemonEvolutionChain(data?.evolution_chain?.url);
    }

    return (
        <Modal>
            <div className={`modal-header modal-${CapitalizeFirstLetter(
                Species ? Species[0] : "Default"
            )}`}>
                <div className="icons">
                    <div className="back" onClick={handleClose}>
                        <BackIcon />
                    </div>
                    <div
                        className={`like like-${isInTeam ? "active" : ""}`}
                        onClick={() => addPokemonToTeam(pokemon)}
                    >
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