import { useGameStore } from "@/stores/game";
import { useMemo } from "react";
import clsx from "clsx";

const LeftOverNumbers = () => {
    const { cells } = useGameStore();

    const leftovers = useMemo(() => {
        return Array.from(Array(9)).map((_, index) => {
            return {
                number: index + 1,
                count: 9 - cells.filter((value) => value === index + 1).length,
            };
        });
    }, [cells]);

    return (
        <div className="grid grid-cols-9 border divide-x rounded-lg">
            {leftovers.map((leftover, index) => {
                return (
                    <div
                        key={index}
                        className={clsx(
                            "flex flex-col text-center",
                            leftover.count == 0 && "opacity-0"
                        )}
                    >
                        <span className="p-3 text-lg leading-none">
                            {leftover.number}
                        </span>
                        <span className="p-3 text-sm leading-none text-gray-500 bg-primary/5">
                            {leftover.count}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default LeftOverNumbers;
