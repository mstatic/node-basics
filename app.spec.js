var expect = require("chai").expect;
var printMessage = require("./app.js").printMessage;

describe("Node Basics", () => {
    describe("printMessage", function () {
        it("should print details", () => {
            expect(printMessage('peter', 100, 1000)).to.equal('');
        });
    })
})