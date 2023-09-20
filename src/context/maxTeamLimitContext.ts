import { createContext } from "react";

export interface IMaxTeamLimitContext {
    displayModal: () => void
}

export const MaxTeamLimitContext = createContext<IMaxTeamLimitContext | undefined>(undefined);