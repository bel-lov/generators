import Person from './person';

export default class Team {
    constructor() {
        this.players = [];
        this.numberPlayer = 0;
    }
    add(player) {
        if (player instanceof Person) {
            this.players.push(player);
            this.numberPlayer += 1;
        } else {
            throw new Error('Ошибка');
        }
    }
    *[Symbol.iterator]() {
        for (let current = 0; current < numberPlayer; current++) {
            const { players, numberPlayer } = this;
            yield players[current];
        }
    }
}
