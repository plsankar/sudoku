import "./index.css";

import Board from "./board";
import OptionsBox from "./option-box";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <div className="flex items-center justify-center p-10 min-h-sceen min-w-screen">
                <div className="flex gap-3">
                    <Board />
                    <OptionsBox />
                </div>
            </div>
        </ThemeProvider>
    </React.StrictMode>
);
