import { Request, Response } from 'express';
import * as ClubService from '../services/clubs-service';

export const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await ClubService.getClubsService();

    res.status(httpResponse.status).json(httpResponse.body);
}