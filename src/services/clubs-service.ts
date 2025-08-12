import * as ClubRepository from '../repositories/clubs-repository';
import * as httpResponse from '../utils/http-helper';

export const getClubsService = async () => {
    const clubs = await ClubRepository.getAllClubs();
    return httpResponse.ok(clubs);
}