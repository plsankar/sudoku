import { useGamePlayStore } from "./stores/gameplay";
import { useGameStore } from "./stores/game";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Switch } from "./components/ui/switch";
import { ModeToggle } from "./components/mode-toggle";

const OptionsBox = () => {
    const {
        highlightSameRow,
        highlightSameCol,
        highlightSameBlock,
        enableErrorChecking,
        toggleHighlightSameRow,
        toggleHighlightSameCol,
        toggleHighlightSameBlock,
        toggleErrorChecking,
    } = useGamePlayStore();

    const { timer, reset, finish, finished } = useGameStore();

    function fmtMSS(s: number) {
        return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    }

    return (
        <Card>
            <CardContent className="p-5">
                <div className="flex flex-col gap-5 min-w-64">
                    {finished ? null : <div>{fmtMSS(timer)}</div>}
                    <div className="flex items-center">
                        <Switch
                            id="highlightSameRow"
                            checked={highlightSameRow}
                            onCheckedChange={() => toggleHighlightSameRow()}
                        />
                        <label
                            htmlFor="highlightSameRow"
                            className="ml-2 text-xs"
                        >
                            Highlight Current Row
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Switch
                            id="highlightSameCol"
                            checked={highlightSameCol}
                            onCheckedChange={() => toggleHighlightSameCol()}
                        />
                        <label
                            htmlFor="highlightSameCol"
                            className="ml-2 text-xs"
                        >
                            Highlight Current Column
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Switch
                            id="highlightSameBlock"
                            checked={highlightSameBlock}
                            onCheckedChange={() => toggleHighlightSameBlock()}
                        />
                        <label
                            htmlFor="highlightSameBlock"
                            className="ml-2 text-xs"
                        >
                            Highlight Current Block
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Switch
                            id="enableErrorChecking"
                            checked={enableErrorChecking}
                            onCheckedChange={() => toggleErrorChecking()}
                        />
                        <label
                            htmlFor="enableErrorChecking"
                            className="ml-2 text-xs"
                        >
                            Enable Error Checking
                        </label>
                    </div>

                    <div className="flex gap-4">
                        <Button variant={"destructive"} onClick={reset}>
                            Reset
                        </Button>
                        <Button variant={"secondary"} onClick={finish}>
                            Finish
                        </Button>
                    </div>

                    <div>
                        <ModeToggle />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default OptionsBox;
