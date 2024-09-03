import "./index.css";

import Board from "./board";
import OptionsBox from "./option-box";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider";
import LeftOverNumbers from "./components/left-over-numbers";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <div className="flex items-center justify-center p-10 min-h-sceen min-w-screen">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-5">
                        <Board />
                        <LeftOverNumbers />
                    </div>
                    <div>
                        <OptionsBox />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    </React.StrictMode>
);
