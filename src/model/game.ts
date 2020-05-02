export abstract class Game {
    id: string;
    name: string;
    operatorHash: string;
    status: string;
    playerCount: number;
    calledNumbers = [];
    lastCalledNumber: number;
}