import { ModDLCs } from '../types/shared/ModDLCs';

export const KNOWN_DLCS: Map<Exclude<ModDLCs, ModDLCs.None>, Lowercase<string>> = new Map([
    [ModDLCs.Royalty, 'royalty'],
    [ModDLCs.Ideology, 'ideology'],
    [ModDLCs.Biotech, 'biotech'],
]);
