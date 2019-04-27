const Coordinate = require('./coordinate');

class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    reduceDimension(matrix, indication) {
        let matrixReduced = [[]],
            matrixReducedCoordinate = new Coordinate(0, 0);
        const dimension = matrix.length;
        const isNotAligned = (coordinate, indication) =>
            !(coordinate.abscissa === indication.abscissa || coordinate.ordered === indication.ordered);

        matrix.forEach((row, abscissa) => {
            row.forEach((value, ordered) => {
                let coordered = new Coordinate(abscissa, ordered);

                if (isNotAligned(coordered, indication)) {
                    matrixReduced[matrixReducedCoordinate.ordered].push(value);
                    matrixReducedCoordinate.nextIndication(dimension, () => matrixReduced.push([]));
                }
            });
        });

        return new Matrix(matrixReduced);
    }

    determinantTwo() {
        const matrixTwo = this.matrix;
        return matrixTwo[0][0] * matrixTwo[1][1] - matrixTwo[1][0] * matrixTwo[0][1];
    }

    determinantN() {
        let determinant = 0;
        const matrix = this.matrix,
            dimension = matrix.length;

        for (let ordered = 0; ordered < dimension; ordered++) {
            const abscissa = 0,
                indication = new Coordinate(abscissa, ordered),
                matrixValue = matrix[abscissa][ordered],
                matrixReduced = this.reduceDimension(matrix, indication);

            determinant += indication.sign() * matrixValue * matrixReduced.determinant();
        }

        return determinant;
    }

    determinant() {
        switch (this.matrix.length) {
            case 1: return this.matrix[0];
            case 2: return this.determinantTwo();
            default: return this.determinantN();
        }
    }
}

module.exports = Matrix;
