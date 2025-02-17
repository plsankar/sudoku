import { ModeToggle } from "@/components/mode-toggle";
import SettingsDrawer from "./settings-drawer";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between border-b py-7">
            <a href="./" className="font-serif text-3xl leading-tight">
                sudoku
            </a>
            <div className="flex items-center gap-3">
                <SettingsDrawer />
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
