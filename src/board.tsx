import {
    checkIfBlockHasError,
    checkIfColumnHasError,
    checkIfRowHasError,
} from "./utils";

import Cell from "./hooks/cell";
import _ from "lodash";
import { useEffect } from "react";
import { useGameStore } from "./stores/game";
import TimerClock from "./components/timer-clock";

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
        <div className="max-w-xl">
            <TimerClock />
            <div className="grid grid-cols-9 gap-[2px] overflow-hidden rounded-lg bg-background border">
                {cells.map((cell, index) => (
                    <Cell cell={cell} index={index} key={`cell-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Board;
