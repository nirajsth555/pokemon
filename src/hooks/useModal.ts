import { useState } from "react";

export function useModal() {
    const [showModal, setShowModal] = useState(false);

    const displayModal = () => {
        setShowModal(true);
    }

    const hideModal = () => {
        setShowModal(false);
    }

    return {
        showModal,
        displayModal,
        hideModal
    }
}