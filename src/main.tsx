import "./index.css";

import Board from "./board";
import OptionsBox from "./option-box";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div className="min-h-sceen min-w-screen p-10 flex justify-center items-center">
            <div className="flex gap-3">
                <div className="border-b border-r">
                    <Board />
                </div>
                <div className="border">
                    <OptionsBox />
                </div>
            </div>
        </div>
    </React.StrictMode>
);
