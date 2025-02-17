import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { SettingsIcon } from "lucide-react";
import { useGamePlayStore } from "@/stores/gameplay";
import SettingsSwitchItem from "./settings-switch-item";

const SettingsDrawer = () => {
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
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                    <SettingsIcon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="w-full max-w-xl mx-auto">
                    <DrawerHeader>
                        <DrawerTitle>Settings</DrawerTitle>
                    </DrawerHeader>
                    <div className="flex flex-col gap-5 p-4 pb-5 min-w-64">
                        <SettingsSwitchItem
                            title="Highlight Current Row & Column"
                            name="highlightSameRowCol"
                            onChange={() => {
                                toggleHighlightSameCol();
                                toggleHighlightSameRow();
                            }}
                            value={highlightSameCol && highlightSameRow}
                        />
                        <SettingsSwitchItem
                            title="Highlight Current Block"
                            name="highlightSameBlock"
                            onChange={toggleHighlightSameBlock}
                            value={highlightSameBlock}
                        />
                        <SettingsSwitchItem
                            title="Error Checking"
                            name="enableErrorChecking"
                            onChange={toggleErrorChecking}
                            value={enableErrorChecking}
                        />
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default SettingsDrawer;
