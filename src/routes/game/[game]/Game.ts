import { writable, type Writable } from "svelte/store";

export abstract class GameInstance {
    numbers: Writable<[number, number]> = writable([0, 0])
    
    constructor() {
        this.generateNumbers();
    }

    abstract getOperationSign(): string;

    abstract generateNumbers(): void;

    getNumbers(): [number, number] | undefined {
        let returnVal;
        let unsubscribe = this.numbers.subscribe((val) => {
            returnVal = val;
        })
        unsubscribe();

        return returnVal;
    }

    abstract verifySolution(solution: number): boolean;
}

export class AdditionGameInstance extends GameInstance {
    constructor() {
        super();
    }

    getOperationSign(): string { return "+"; }

    generateNumbers() {
        this.numbers.set([randomNumber(100), randomNumber(100)]);
    }

    verifySolution(solution: number) {
        let numbers = this.getNumbers();
        if (typeof numbers !== "undefined") {
            if (numbers[0] + numbers[1] === solution) {
                return true;
            }
        }

        return false;
    }
}

export class SubtractionGameInstance extends GameInstance {
    constructor() {
        super();
    }

    getOperationSign(): string { return "-"; }

    generateNumbers() {
        this.numbers.set([randomNumber(100), randomNumber(100)]);
    }

    verifySolution(solution: number) {
        let numbers = this.getNumbers();
        if (typeof numbers !== "undefined") {
            if (numbers[0] - numbers[1] === solution) {
                return true;
            }
        }

        return false;
    }
}

export class MultiplicationGameInstance extends GameInstance {
    constructor() {
        super();
    }

    getOperationSign(): string { return "*"; }

    generateNumbers() {
        let numbers = [0, 0];
        for (let i = 0; i <= 1; i++) {
            while(numbers[i] == 0) {
                numbers[i] = randomNumber(10);
            }
        }
        this.numbers.set([numbers[0], numbers[1]]);
    }

    verifySolution(solution: number) {
        let numbers = this.getNumbers();
        if (typeof numbers !== "undefined") {
            if (numbers[0] * numbers[1] === solution) {
                return true;
            }
        }

        return false;
    }
}


// Helpers
function randomNumber(modifier: number): number {
    return Math.round(Math.random() * modifier);
}