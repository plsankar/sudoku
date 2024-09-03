import { useGameStore } from "@/stores/game";
import { Card, CardContent } from "./ui/card";
import { useMemo } from "react";

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
        <Card>
            <CardContent className="p-3">
                <div className="grid grid-cols-9">
                    {leftovers.map((leftover, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col p-3 text-center bg-gray-50"
                            >
                                <span className="mb-2 text-xl">
                                    {leftover.number}
                                </span>
                                <span className="text-base text-gray-500">
                                    {leftover.count}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};

export default LeftOverNumbers;
