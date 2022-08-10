const assert = require ('assert'); 
const { describe, it } = require('node:test');


describe('Array', function(){
    describe('IndexOf', function(){
        it('should return -1 when the value is not prevent', function (){
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});