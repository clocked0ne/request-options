'use strict';

/**
 * provides a generic set of request options for the npm request module that can be augmented
 *
 * @param {Object} [options]
 * @param {Object} [defaults]
 * @returns {*|{}}
 */
module.exports = (options = {}, {
    json = true,
    gzip = true,
    timeout = 10000
} = {}) => {
    if(!options || typeof options !== 'object')
        throw new Error('Additional options must be provided as JSON');
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
