import {
    checkIfBlockHasError,
    checkIfColumnHasError,
    checkIfRowHasError,
} from "./utils";

import Cell from "./hooks/cell";
import _ from "lodash";
import { useEffect } from "react";
import { useGameStore } from "./stores/game";

const Board = () => {
    const { cells, setErrors, init, setTimer, timer, finished } =
        useGameStore();

    useEffect(() => {
        init();
    }, [init]);

    useEffect(() => {
        const _errors = _(cells)
            .map((cell, index) => {
                if (!cell) return null;
                if (checkIfColumnHasError(cells, index)) return index;
                if (checkIfRowHasError(cells, index)) return index;
                if (checkIfBlockHasError(cells, index)) return index;
                return null;
            })
            .value()
            .filter((i): i is number => {
                return typeof i === "number";
            });
        setErrors(_errors);
    }, [cells, setErrors]);

    useEffect(() => {
        if (finished) return;
        const intervalId = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timer, setTimer, finished]);

    return (
        <div className="grid grid-cols-9 border-black border bg-gray-500 gap-[1px] overflow-hidden">
            {cells.map((cell, index) => (
                <Cell cell={cell} index={index} key={`cell-${index}`} />
            ))}
        </div>
    );
};

export default Board;
