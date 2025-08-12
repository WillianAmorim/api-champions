import { ClubModel } from "../models/club-model";
import fs from 'fs/promises';

const databasePath = 'src/data/clubs.json';

export const getAllClubs = async (): Promise<ClubModel[]> => {
    // Logic to retrieve all clubs from the database
    const data = await fs.readFile(databasePath, 'utf-8');

    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
}
