import { WINNER_RESOLUTION, PATTERN_NAMES } from './constants';

export abstract class Game {
    id: string;
    name: string;
    operatorHash: string;
    status: string;
    playerCount: {
        total: number,
        online: number
    };
    calledNumbers = [];
    lastCalledNumber: number;
    winnerResolution: WINNER_RESOLUTION;
    finishingPattern: PATTERN_NAMES;
    cardLimit: number;
    createdAt: Date
}