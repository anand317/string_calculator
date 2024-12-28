import {add} from '../components/StringCalculator'

describe('string calculator',()=>{
    test('Should return 0 for empty string',()=>{
        expect(add("")).toBe(0)
    });
    test('should return the sum of two numbers separated by a comma', () => {
        expect(add("1,5")).toBe(6);
    });
    test('should handle new lines as separators', () => {
        expect(add("1\n2,3")).toBe(6);
    });
    test('should support different delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });
    test('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });
   
    test('should throw an error for multiple negative numbers', () => {
        expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
    });
    
})