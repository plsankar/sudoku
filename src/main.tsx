import "./index.css";

import Board from "./board";
import OptionsBox from "./option-box";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider";
import LeftOverNumbers from "./components/left-over-numbers";
import Navbar from "./components/navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <div className="max-w-4xl px-4 mx-auto">
                <Navbar />
                <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-5 min-h-sceen min-w-screen">
                    <div className="flex flex-col gap-5 sm:col-span-3">
                        <Board />
                        <LeftOverNumbers />
                    </div>
                    <div className="max-w-sm col-span-2">
                        <OptionsBox />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    </React.StrictMode>
);
