import { useGamePlayStore } from "./stores/gameplay";
import { useGameStore } from "./stores/game";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

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
                    <div className="flex items-center mb-4">
                        <input
                            id="highlightSameRow"
                            type="checkbox"
                            checked={highlightSameRow}
                            onChange={() => toggleHighlightSameRow()}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded form-checkbox focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                            htmlFor="highlightSameRow"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Highlight Current Row
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input
                            id="highlightSameCol"
                            type="checkbox"
                            checked={highlightSameCol}
                            onChange={() => toggleHighlightSameCol()}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded form-checkbox focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                            htmlFor="highlightSameCol"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Highlight Current Column
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input
                            id="highlightSameBlock"
                            type="checkbox"
                            checked={highlightSameBlock}
                            onChange={() => toggleHighlightSameBlock()}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded form-checkbox focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                            htmlFor="highlightSameBlock"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Highlight Current Block
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            id="enableErrorChecking"
                            type="checkbox"
                            checked={enableErrorChecking}
                            onChange={() => toggleErrorChecking()}
                            className="w-4 h-4 text-red-600 border-gray-300 rounded form-checkbox focus:ring-red-500 focus:ring-2"
                        />
                        <label
                            htmlFor="enableErrorChecking"
                            className="ml-2 text-sm font-medium text-gray-900"
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
                </div>
            </CardContent>
        </Card>
    );
};

export default OptionsBox;
