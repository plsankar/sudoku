import { ChangeEventHandler, FC, useEffect, useMemo, useRef } from "react";
import { isSameBlock, isSameCol, isSameRow } from "../utils";

import { twMerge } from "tailwind-merge";
import { useGamePlayStore } from "../stores/gameplay";
import { useGameStore } from "../stores/game";
import useKeyNav from "./use-key-nav";

const Cell: FC<{
    cell: number | null;
    index: number;
}> = ({ cell, index }) => {
    const {
        activeCell,
        setActiveCell,
        setCellValue,
        errors,
        cells,
        cellsPrefilled,
    } = useGameStore();

    const {
        highlightSameRow,
        highlightSameBlock,
        highlightSameCol,
        enableErrorChecking,
    } = useGamePlayStore();

    const prefilled = useMemo(() => {
        return (
            cellsPrefilled[index] != null &&
            cellsPrefilled[index] === cells[index]
        );
    }, [index, cellsPrefilled, cells]);

    const { handlers } = useKeyNav(activeCell, setActiveCell);

    const inputElRef = useRef<HTMLInputElement | null>(null);

    const handleOnCellValueChange = (index: number) => {
        const handler: ChangeEventHandler<HTMLInputElement> = (event) => {
            const value = event.target.value;

            if (value.length == 0) {
                setCellValue(index);
                return;
            }

            if (value.length > 1) {
                return;
            }

            if (!/^\d+$/.test(value)) {
                console.log("Not a number");
                return;
            }

            const number = parseInt(value);

            if (number > 9 || number < 0) {
                console.log("Not between number");
                return;
            }

            setCellValue(index, number);
        };
        return handler;
    };

    useEffect(() => {
        if (activeCell === index && inputElRef.current != null) {
            inputElRef.current.focus();
            setTimeout(function () {
                if (!inputElRef.current) return;
                inputElRef.current.selectionStart =
                    inputElRef.current.selectionEnd = 10000;
            }, 0);
        }
    }, [index, activeCell, inputElRef]);

    return (
        <div
            className={twMerge(
                `h-14 w-14 overflow-hidden bg-white relative`
                // index === 0 && "border-l border-t"
            )}
        >
            <input
                readOnly={prefilled}
                ref={inputElRef}
                type="text"
                value={cell || ""}
                onBlur={() => setActiveCell(-1)}
                onFocus={() => setActiveCell(index)}
                className={twMerge(
                    "w-full h-full text-center bg-blue-50 dark:bg-gray-900 outline-none focus-visible:outline-none",
                    //
                    index % 9 === 2 ? "border-r-2 border-r-background" : "",
                    index % 9 === 5 ? "border-r-2 border-r-background" : "",
                    (index / 9) * 2 >= 4 && (index / 9) * 2 < 6
                        ? "border-b-2 border-b-background"
                        : "",
                    (index / 9) * 5 >= 25 && (index / 9) * 5 < 30
                        ? "border-b-2 border-b-background"
                        : "",

                    //
                    highlightSameCol &&
                        isSameCol(index, activeCell) &&
                        "bg-blue-100 dark:bg-gray-950/95",
                    highlightSameRow &&
                        isSameRow(index, activeCell) &&
                        "bg-blue-100 dark:bg-gray-950/95",
                    highlightSameBlock &&
                        isSameBlock(index, activeCell) &&
                        "bg-blue-100 dark:bg-gray-950/95",

                    //
                    activeCell === index && "bg-blue-200 dark:bg-gray-950",
                    !prefilled &&
                        enableErrorChecking &&
                        errors.indexOf(index) > -1 &&
                        "bg-red-300 dark:bg-red-400",
                    prefilled && "text-blue-500"

                    // TODO: add it as a option
                    // isSameValue(cells, activeCell, index) && "bg-gray-200"
                )}
                onChange={handleOnCellValueChange(index)}
                {...handlers}
            />
        </div>
    );
};

export default Cell;
