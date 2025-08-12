import { PlayerModel } from "../models/player-model";
import { StatisticModel } from "../models/statistic-model";


const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 77
        }
    },
    {
        id: 3,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 93,
            Dribbling: 88,
            Defending: 64,
            Physical: 78
        }
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 97,
            Shooting: 89,
            Passing: 80,
            Dribbling: 92,
            Defending: 38,
            Physical: 77
        }
    },
    {
        id: 5,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 78,
            Shooting: 94,
            Passing: 79,
            Dribbling: 86,
            Defending: 43,
            Physical: 83
        }
    },
    {
        id: 6,
        name: "Karim Benzema",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 79,
            Shooting: 92,
            Passing: 83,
            Dribbling: 88,
            Defending: 39,
            Physical: 78
        }
    },
    {
        id: 7,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 93,
            Shooting: 88,
            Passing: 82,
            Dribbling: 90,
            Defending: 45,
            Physical: 75
        }
    },
    {
        id: 8,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 90,
            Pace: 78,
            Shooting: 60,
            Passing: 71,
            Dribbling: 72,
            Defending: 91,
            Physical: 86
        }
    },
    {
        id: 9,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 91,
            Shooting: 92,
            Passing: 65,
            Dribbling: 80,
            Defending: 45,
            Physical: 88
        }
    },
    {
        id: 10,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 73,
            Shooting: 79,
            Passing: 89,
            Dribbling: 90,
            Defending: 72,
            Physical: 66
        }
    },
    {
        id: 11,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 72,
            Shooting: 74,
            Passing: 86,
            Dribbling: 82,
            Defending: 84,
            Physical: 79
        }
    },
    {
        id: 12,
        name: "Vinícius Júnior",
        club: "Real Madrid",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 86,
            Pace: 95,
            Shooting: 79,
            Passing: 76,
            Dribbling: 90,
            Defending: 29,
            Physical: 65
        }
    },
    {
        id: 13,
        name: "N'Golo Kanté",
        club: "Chelsea",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 78,
            Shooting: 66,
            Passing: 77,
            Dribbling: 81,
            Defending: 87,
            Physical: 82
        }
    },
    {
        id: 14,
        name: "Trent Alexander-Arnold",
        club: "Liverpool",
        nationality: "England",
        position: "Defender",
        statistics: {
            Overall: 87,
            Pace: 80,
            Shooting: 66,
            Passing: 89,
            Dribbling: 80,
            Defending: 80,
            Physical: 70
        }
    },
    {
        id: 15,
        name: "Pedri",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 77,
            Shooting: 73,
            Passing: 85,
            Dribbling: 88,
            Defending: 66,
            Physical: 65
        }
    },
    {
        id: 16,
        name: "Mason Mount",
        club: "Chelsea",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 84,
            Pace: 78,
            Shooting: 78,
            Passing: 83,
            Dribbling: 82,
            Defending: 64,
            Physical: 69
        }
    },
    {
        id: 17,
        name: "Phil Foden",
        club: "Manchester City",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 84,
            Shooting: 80,
            Passing: 81,
            Dribbling: 88,
            Defending: 55,
            Physical: 65
        }
    },
    {
        id: 18,
        name: "Sadio Mané",
        club: "Bayern Munich",
        nationality: "Senegal",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 92,
            Shooting: 85,
            Passing: 80,
            Dribbling: 88,
            Defending: 44,
            Physical: 75
        }
    },
    {
        id: 19,
        name: "Antonio Rüdiger",
        club: "Real Madrid",
        nationality: "Germany",
        position: "Defender",
        statistics: {
            Overall: 86,
            Pace: 82,
            Shooting: 45,
            Passing: 70,
            Dribbling: 67,
            Defending: 86,
            Physical: 85
        }
    },
    {
        id: 20,
        name: "João Cancelo",
        club: "Manchester City",
        nationality: "Portugal",
        position: "Defender",
        statistics: {
            Overall: 87,
            Pace: 85,
            Shooting: 70,
            Passing: 83,
            Dribbling: 85,
            Defending: 80,
            Physical: 75
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
    const player = database.find(p => p.id === id);
    return player || null;
};

export const createPlayer = async (playerData: PlayerModel): Promise<PlayerModel> => {
    const newPlayer = { ...playerData, id: database.length + 1 };
    database.push(newPlayer);
    return newPlayer;
};

export const deletePlayer = async (id: number): Promise<void> => {
    const index = database.findIndex(p => p.id === id);
    if (index !== -1) {
        database.splice(index, 1);
    }
}

export const updatePlayer = async (id: number, statistics: StatisticModel): Promise<PlayerModel | null> => {
    const playerIndex = database.findIndex(p => p.id === id);
    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
};


