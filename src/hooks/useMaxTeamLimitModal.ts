import { useContext } from 'react';
import { MaxTeamLimitContext } from '../context/maxTeamLimitContext';

export const useMaxTeamLimitModal = () => {
    const context = useContext(MaxTeamLimitContext);
    if (!context) {
        throw new Error('useMaxTeamLimitModal must be used within a MaxTeamLimitProvider');
    }
    return context;
}