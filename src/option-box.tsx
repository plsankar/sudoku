import { useGamePlayStore } from "./stores/gameplay";
import { useGameStore } from "./stores/game";

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
        <div className="flex flex-col gap-3 p-3">
            {finished ? null : <div>{fmtMSS(timer)}</div>}
            <div className="flex items-center mb-4">
                <input
                    id="highlightSameRow"
                    type="checkbox"
                    checked={highlightSameRow}
                    onChange={() => toggleHighlightSameRow()}
                    className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
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
                    className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
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
                    className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
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
                    className="form-checkbox h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                />
                <label
                    htmlFor="enableErrorChecking"
                    className="ml-2 text-sm font-medium text-gray-900"
                >
                    Enable Error Checking
                </label>
            </div>

            <div className="flex gap-4">
                <button onClick={reset}>Reset</button>
                <button onClick={finish}>Finish</button>
            </div>
        </div>
    );
};

export default OptionsBox;
