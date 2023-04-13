const {
    vectorAddition,
    dotProduct,
    norm,
    crossProduct,
    mean,
    median,
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

describe('dotProduct', () => {

    test('should return the dot product of two vectors', () => {
        const a = [1, 2, 3];
        const b = [4, 5, 6];
        expect(dotProduct(a, b)).toBe(32);
    });

    test('should return error if vectors differ in size', () => {
        const a = [1, 2, 3];
        const b = [4, 5];
        expect(dotProduct(a, b)).toBe("I due vettori devono avere la stessa lunghezza!");
    });

    test('should return 0 if two vectors are empty', () => {
        const a = [];
        const b = [];
        expect(dotProduct(a, b)).toBe(0);
    });

});

describe('norm', () => {
    
        test('should return the norm of a vector', () => {
            const a = [1, 2, 3];
            expect(norm(a)).toBe(Math.sqrt(14));
        });
    
        test('should return 0 if vector is empty', () => {
            const a = [];
            expect(norm(a)).toBe(0);
        });
    
});

describe('crossProduct', () => {

    test('should return the cross product of two vectors', () => {
        const a = [1, 2, 3];
        const b = [4, 5, 6];
        expect(crossProduct(a, b)).toEqual([-3, 6, -3]);
    });

    test('should return error if vectors differ in size', () => {
        const a = [1, 2, 3];
        const b = [4, 5];
        expect(crossProduct(a, b)).toBe("I due vettori devono essere di dimensione 3!");
    });

});

describe('mean', () => {
    
        test('should return the mean of a vector', () => {
            const a = [1, 2, 3];
            expect(mean(a)).toBe(2);
        });
    
        test('should return 0 if vector is empty', () => {
            const a = [];
            expect(mean(a)).toBe(0);
        });
    
});

describe('median', () => {
    
    test('should return the median of a vector', () => {
        const a = [1, 2, 3];
        expect(median(a)).toBe(2);
    });

    test('should return 0 if vector is empty', () => {
        const a = [];
        expect(median(a)).toBe(0);
    });
    
});
