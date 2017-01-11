const requestOptions = require('../index'),
    assert = require('assert');

describe('request-options', function(){
    it('returns valid JSON when called directly with no parameters', () => {
        assert.ok(JSON.parse(JSON.stringify(requestOptions())))
    });
});
