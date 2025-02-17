import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const SettingsSwitchItem = ({
    name,
    title,
    value,
    onChange,
}: {
    name: string;
    title: string;
    value: boolean;
    onChange: () => void;
}) => {
    return (
        <div className="flex flex-row items-center justify-between p-3 border rounded-lg shadow-sm">
            <div className="space-y-0.5">
                <Label htmlFor={name}>{title}</Label>
                {/* <p className="text-sm text-muted-foreground"></p> */}
            </div>
            <Switch checked={value} onCheckedChange={onChange} />
        </div>
    );
};

export default SettingsSwitchItem;
