export type NextMedAppName = "nextmed-admin" | "nextmed-institutions" | "nextmed-app";
type PrimaryColors = {
    primary: string;
    primary1: string;
    primary2: string;
    "primary-1": string;
    "primary-2": string;
};
type DarkColors = {
    dark: string;
    "dark-1": string;
    "dark-2": string;
    "dark-3": string;
    "dark-4": string;
    "dark-5": string;
};
type SecondaryColors = {
    secondary: string;
    "secondary+1": string;
    "secondary-1": string;
    "secondary-2": string;
};
export type PalleteColors = (PrimaryColors & DarkColors & SecondaryColors) | (PrimaryColors & DarkColors);
export {};
