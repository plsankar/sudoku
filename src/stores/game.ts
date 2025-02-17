import {
    DIFFICULTY_EASY,
    generateSudoku,
    prepareBoardForPlaying,
} from "../auto";

import { create } from "zustand";

type GameStore = {
    timer: number;
    setTimer: (timer: number) => void;

    //
    cellsOriginal: (number | null)[];
    cells: (number | null)[];
    cellsPrefilled: (number | null)[];
    setCells: (cells: (number | null)[]) => void;
    setCellValue: (index: number, value?: number | null) => void;

    //
    activeCell: number;
    setActiveCell: (activeCell: number) => void;

    //
    errors: number[];
    setErrors: (errors: number[]) => void;

    finished: boolean;
    inited: boolean;
    init: () => void;

    reset: () => void;
    finish: () => void;
};

export const useGameStore = create<GameStore>()((set) => ({
    timer: 0,
    setTimer: (timer) => set(() => ({ timer })),

    //
    cellsOriginal: [],
    cells: Array.from(Array(9 * 9)).map(() => null),
    cellsPrefilled: [],
    setCells: (cells) => set(() => ({ cells })),
    setCellValue: (index, value = null) =>
        set((state) => ({
            cells: state.cells.map((cell, _index) =>
                _index === index ? value : cell
            ),
        })),

    //
    activeCell: 0,
    setActiveCell: (activeCell) => set(() => ({ activeCell })),

    //
    errors: [],
    setErrors: (errors) => set(() => ({ errors })),

    //
    finished: false,
    inited: false,
    init: () =>
        set((state) => {
            const cells = generateSudoku();
            const given = prepareBoardForPlaying([...cells], DIFFICULTY_EASY);
            if (state.inited) {
                return state;
            }
            return {
                inited: true,
                cells: given,
                cellsPrefilled: given,
                cellsOriginal: cells,
            };
        }),

    reset: () =>
        set((state) => ({
            cells: state.cellsPrefilled,
            timer: 0,
            finished: false,
        })),
    finish: () =>
        set((state) => ({
            cells: state.cellsOriginal,
            finished: true,
        })),
}));
