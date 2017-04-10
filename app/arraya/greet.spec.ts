import { greet } from './greet';

describe('greet',() =>{
    it('should include the name in the meassage', () =>{
        expect(greet('shweta')).toContain('shweta');
    })
});