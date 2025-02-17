import { formatSecondToTimer } from "@/lib/utils";
import { useGameStore } from "@/stores/game";

const TimerClock = () => {
    const { timer } = useGameStore();
    return (
        <>
            <div className="mb-2 font-mono text-3xl text-primary/70">
                {formatSecondToTimer(timer)}
            </div>
        </>
    );
};

export default TimerClock;
