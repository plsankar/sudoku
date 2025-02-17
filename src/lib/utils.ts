import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatSecondToTimer(s: number) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}
