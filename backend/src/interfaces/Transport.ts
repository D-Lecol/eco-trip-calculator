export interface Transport {
    name: string;

    getCo2EmissionsPerKm(): number;
}