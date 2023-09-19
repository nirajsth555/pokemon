import { useState } from "react";
import LikeIcon from "../icons/like";
import Modal from "../modal/Modal";
import Tabs from "../tabs/Tabs";
import About from "./about";
import BaseStats from "./baseStats";
import Evolution from "./evolution";
import BackIcon from "../icons/back";

export default function PokemonDetail({ handleClose }: any) {
    const tabs = [
        {
            title: "About",
            content: (<About />)
        },
        {
            title: "Base Stats",
            content: (<BaseStats />)
        },
        {
            title: "Evolution",
            content: (<Evolution />)
        }
    ]

    const [tabIndex, setTabIndex] = useState("About");

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
                        <h6>#1</h6>
                        <h3>Pokemon Name</h3>
                        <div className="flex badges">

                        </div>
                    </div>
                    <div className="modal-body--img">
                        <img src="" alt="name" />
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