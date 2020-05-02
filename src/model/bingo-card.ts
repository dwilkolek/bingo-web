export class BingoCard {
    id: string;
    numbers:BingoCell[][];
}

export class BingoCell {   
    value: number;
    marked: boolean;

    constructor(value: number) {
        this.value = value
    }
}