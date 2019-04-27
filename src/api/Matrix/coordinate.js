class Coordinate {
    constructor(abscissa, ordered) {
        this.abscissa = abscissa;
        this.ordered = ordered;
    }

    sign() {
        const sum = this.abscissa + this.ordered;
        const isPair = (number) => number % 2 === 0;
        return isPair(sum) ? 1 : -1;
    }

    // @callback: is for dynammical table pushing
    nextIndication(dimension, callback) {
        const lastIndex = dimension - 1;

        this.abscissa++;
        if (this.abscissa === lastIndex) {
            this.abscissa = 0;
            this.ordered++;

            if (this.ordered !== lastIndex) callback();
        }
    }
}

module.exports = Coordinate;

