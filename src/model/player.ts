import { BingoCard } from './bingo-card';

export class Player {
    id: string;
    name: string;
    bingoCards: { [key: string]: BingoCard };
}