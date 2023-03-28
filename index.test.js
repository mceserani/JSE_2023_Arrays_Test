const {
    vectorAddition,
    dotProduct,
    norm,
    crossProduct,
    mean,
    median,
    minMax
} = require("./operations.js");

describe("vectorAddition", () => {
    
    test("should return the sum of two vectors", () => {
        const a = [1, 2, 3];
        const b = [4, 5, 6];
        expect(vectorAddition(a, b)).toEqual([5, 7, 9]);
        expect(vectorAddition(a, b)).toHaveLength(3);
    });

    test("should return error if vectors differ in size", () => {
        const a = [1, 2, 3];
        const b = [4, 5];
        expect(vectorAddition(a, b)).toBe("I due vettori devono avere la stessa lunghezza!");
    });

    test("should return [] if two vectors are empty", () => {
        const a = [];
        const b = [];
        expect(vectorAddition(a, b)).toEqual([]);
    });

});

