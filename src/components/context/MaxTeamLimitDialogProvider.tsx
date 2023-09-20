import { ReactNode } from 'react';
import { MaxTeamLimitContext } from "../../context/maxTeamLimitContext"
import { useModal } from "../../hooks/useModal"
import Modal from "../modal/Modal"

export const MaxTeamLimitDialogProvider = ({ children }: { children: ReactNode }) => {
    const { showModal, hideModal, displayModal } = useModal();

    const contextValue = {
        displayModal
    }

    return (
        <MaxTeamLimitContext.Provider value={contextValue}>
            {children}
            {showModal && <div>
                <Modal>
                    <div className="modal-body modal-info">
                        <h5>
                            Maximum pokemon selection reached.
                        </h5>
                        <div className="text-center mt-4">
                            <button className="button button-primary" onClick={hideModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>}
        </MaxTeamLimitContext.Provider>
    )
}

export default MaxTeamLimitDialogProvider