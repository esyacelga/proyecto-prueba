const firstest = require('../routes/route-test')

describe("Addition",function(){
    it("The function should add 2 numbers",function() {
        var value=firstest.getNumeros(5,6);
        expect(value).toBe(11);
    });
});