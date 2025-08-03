import { PlayerModel } from "../models/player-model";


const database: PlayerModel[] = [
    { id: 1, name: 'Messi' },
    { id: 2, name: 'Ronaldo' },
    { id: 3, name: 'Neymar' },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
    const player = database.find(p => p.id === id);
    return player || null;
};
