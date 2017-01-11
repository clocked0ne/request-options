'use strict';

module.exports = function requestOptions (options = {}, {
    json = true,
    gzip = true,
    timeout = 10000
} = {}) {
    Object.assign(
        options,
        {
            json: json,
            gzip: gzip,
            timeout: timeout
        }
    );
    return options;
};
