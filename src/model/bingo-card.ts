import { PATTERN_NAMES } from './constants';

export class BingoCard {
    id: string;
    numbers:BingoCell[][];
    points: number = 0;
    patternsChecked: PATTERN_NAMES[];
    availablePatterns: PATTERN_NAMES[];
}

export class BingoCell {   
    value: number;
    marked: boolean;

    constructor(value: number) {
        this.value = value
    }
}