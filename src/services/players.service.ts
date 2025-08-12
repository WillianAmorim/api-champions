import { PlayerModel } from "../models/player-model";
import { StatisticModel } from "../models/statistic-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    let response = null;

    if(data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = httpResponse.ok(data);
    } else {
        response = httpResponse.noContent();
    }

    return response;
}

export const createPlayerService = async (playerData: PlayerModel) => {
    if(playerData) {
        await PlayerRepository.createPlayer(playerData);
        return httpResponse.created('Player created successfully');
    } else {
        return httpResponse.badRequest("Player data is required");
    }
}

export const deletePlayerService = async (id: number) => {
    let response = null;

    if (!id) {
        return httpResponse.badRequest("Player ID is required");
    }

    await PlayerRepository.deletePlayer(id);
    response = httpResponse.ok({ message: `Player with ID ${id} deleted successfully` });

    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticModel) => {
    if (!statistics) {
        return httpResponse.badRequest("Player data is required");
    }

    const existingPlayer = await PlayerRepository.updatePlayer(id, statistics);
    if (!existingPlayer) {
        return httpResponse.notFound(`Player with ID ${id} not found`);
    }

    return await httpResponse.ok(existingPlayer);
}