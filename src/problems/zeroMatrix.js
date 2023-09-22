function setZerosToMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let x = 0; x < matrix[i].length; x++) {
            if (matrix[i][x] == 0) {

                for (let z = 0; z < matrix.length; z++) {
                    // console.log(z, x)
                    matrix[z][x] = 0;
                }
                // console.log("places :", matrix[0].length)
                for (let z = 0; z < matrix[0].length; z++) {
                    // console.log(i, z)
                    matrix[i][z] = 0;
                }
                return matrix;
            }
        }

    }
}

const matrix = [
    [0, 2, 3],
    [4, 5, 7],
    [7, 8, 9],
    [7, 8, 9],
    [7, 8, 9]
];
console.log(setZerosToMatrix(matrix))
const output = [
    [0, 0, 0],
    [0, 5, 7],
    [0, 8, 9],
    [0, 8, 9],
    [0, 8, 9]]