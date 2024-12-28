import {add} from '../components/StringCalculator'

describe('string calculator',()=>{
    test('Should return 0 for empty string',()=>{
        expect(add("")).toBe(0)
    });
    
})