import { useGameStore } from "./stores/game";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const OptionsBox = () => {
    const { reset, finish } = useGameStore();

    return (
        <Card>
            <CardContent className="p-5">
                <div className="flex gap-4">
                    <Button variant={"destructive"} onClick={reset}>
                        Reset
                    </Button>
                    <Button variant={"secondary"} onClick={finish}>
                        Finish
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default OptionsBox;
