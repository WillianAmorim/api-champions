import { Request, Response } from 'express';
import { getPlayerService, getPlayerByIdService, createPlayerService, deletePlayerService, updatePlayerService } from '../services/players.service';
import { StatisticModel } from '../models/statistic-model';

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    res.status(httpResponse.status).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const httpResponse = await getPlayerByIdService(Number(id));

    res.status(httpResponse.status).json(httpResponse.body);
}

export const createPlayer = async (req: Request, res: Response) => {
    const playerData = req.body;
    console.log("Creating player with data:", playerData);
    const httpResponse = await createPlayerService(playerData);
    res.status(httpResponse.status).json(httpResponse.body);
}

export const deletePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    await deletePlayerService(Number(id));

    res.status(200).json({ message: `Player with ID ${id} deleted successfully` });
}

export const updatePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const statistics: StatisticModel = req.body;

    const data = await updatePlayerService(Number(id), statistics);

    res.status(200).json(data);
}

export function getClubs(arg0: string, getClubs: any) {
    throw new Error('Function not implemented.');
}
