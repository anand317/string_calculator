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
    
})