import { create } from "zustand";

type GamePlayStore = {
    highlightSameRow: boolean;
    highlightSameCol: boolean;
    highlightSameBlock: boolean;
    enableErrorChecking: boolean;
    toggleHighlightSameRow: () => void;
    toggleHighlightSameCol: () => void;
    toggleHighlightSameBlock: () => void;
    toggleErrorChecking: () => void;
};

export const useGamePlayStore = create<GamePlayStore>((set) => ({
    highlightSameRow: true,
    highlightSameCol: true,
    highlightSameBlock: true,
    enableErrorChecking: true,

    toggleHighlightSameRow: () =>
        set((state) => ({ highlightSameRow: !state.highlightSameRow })),
    toggleHighlightSameCol: () =>
        set((state) => ({ highlightSameCol: !state.highlightSameCol })),
    toggleHighlightSameBlock: () =>
        set((state) => ({ highlightSameBlock: !state.highlightSameBlock })),

    toggleErrorChecking: () =>
        set((state) => ({ enableErrorChecking: !state.enableErrorChecking })),
}));
