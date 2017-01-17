const requestOptions = require('../index'),
    assert = require('assert');

describe('request-options', () => {
    it('returns valid JSON when called directly with no parameters', () => {
        assert.ok(
            JSON.parse(
                JSON.stringify(
                    requestOptions()
                )
            )
        );
    });
    it('returns valid JSON when called with additional parameters JSON', () => {
        assert.ok(
            JSON.parse(
                JSON.stringify(
                    requestOptions({
                        method: 'PUT',
                        url: '127.0.0.1:8080/api/search'
                    })
                )
            )
        );
    });
    it('returns default JSON Request options when called directly with no parameters', () => {
        assert.deepStrictEqual(
            requestOptions(),
            {
                json: true,
                gzip: true,
                timeout: 10000
            }
        );
    });
    it('returns extended JSON Request options when called with additional `options` JSON', () => {
        assert.deepStrictEqual(
            requestOptions({
                method: 'PUT',
                url: '127.0.0.1:8080/api/search'
            }),
            {
                method: 'PUT',
                url: '127.0.0.1:8080/api/search',
                json: true,
                gzip: true,
                timeout: 10000
            }
        );
    });
    it('returns extended JSON Request options with overwritten defaults when called with additional properties in `options` JSON', () => {
        assert.deepStrictEqual(
            requestOptions({
                method: 'PUT',
                url: '127.0.0.1:8080/api/search',
                timeout: 20000
            }),
            {
                method: 'PUT',
                url: '127.0.0.1:8080/api/search',
                json: true,
                gzip: true,
                timeout: 20000
            }
        );
    });
    it('returns JSON Request options with overwritten defaults when provided a single default property in `options` JSON', () => {
        assert.deepStrictEqual(
            requestOptions({
                timeout: 20000
            }),
            {
                json: true,
                gzip: true,
                timeout: 20000
            }
        );
    });
    it('throws Error `Additional options must be provided as JSON` if `options` parameter is not an object or undefined', () => {
        assert.throws(
            () => {
                requestOptions(null)
            },
            /Additional options must be provided as JSON/
        );
        assert.throws(
            () => {
                requestOptions('127.0.0.1:8080/api/search')
            },
            /Additional options must be provided as JSON/
        );
    });
});
