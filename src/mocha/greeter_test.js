/**
 * @fileOverview
 */

var mocha = require('mocha');

var greeter = require('./greeter');

describe('getGreeting', function() {
    it('05:00:00 の場合、「おはようございます」と返す', function() {
        var morning = new Date('2015-12-25 05:00:00');
        var result = greeter.greet(morning);
        result.should.equal('おはようございます');
    });
});