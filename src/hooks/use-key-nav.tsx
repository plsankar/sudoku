import React from "react";

const useKeyNav = (active: number, change: (value: number) => void) => {
    const handler: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        switch (event.code) {
            case "ArrowUp": {
                const _index = active - 9;
                if (_index < 0) {
                    event.preventDefault();
                    return;
                }
                change(_index);
                event.preventDefault();
                return true;
            }
            case "ArrowDown": {
                const _index = active + 9;
                if (_index >= 81) {
                    event.preventDefault();
                    return;
                }
                change(_index);
                event.preventDefault();
                return true;
            }
            case "ArrowLeft": {
                const _index = active - 1;
                if (_index < 0) {
                    event.preventDefault();
                    return;
                }
                change(_index);
                event.preventDefault();
                return true;
            }
            case "ArrowRight": {
                const _index = active + 1;
                if (_index >= 81) {
                    event.preventDefault();
                    return;
                }
                change(_index);
                event.preventDefault();
                return true;
            }
            default:
                return false;
        }
    };

    return { handlers: { onKeyDown: handler } };
};

export default useKeyNav;
