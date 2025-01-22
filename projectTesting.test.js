import {capitalize,reverseString} from "./projectTesting";


test('first letter to be capital in string',()=>{
    expect(capitalize('banku')).toMatch(/^[A-Z][a-zA-Z\s]*$/)});

    test('string in reversed form',()=>{
        expect(reverseString('rohit')).toMatch();
    })

