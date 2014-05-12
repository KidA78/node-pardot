var PardotAPI_v3 = require('./PardotAPI_v3');

/**
 * Returns a Pardot API wrapper object of the specified version. Only version v2
 * is currently supported
 *
 * Available options are:
 *  - version   The API version to use (v2). Defaults to v2.
 *  - json   If the API should return XML (default) or JSON.  Set to true to return JSON
 *  - userAgent Custom User-Agent description to use in the request header.
 *
 * @param apiKey The API key to access the Pardot API with
 * @param accessToken The oAuth accesstoken if already completed for the user, or null if not
 * @param options Configuration options as described above
 * @return Instance of the Pardot API in the specified version
 */
function PardotAPI (options) {

  if (!options) {
    options = {};
  }

  if (!options.userKey) {
    throw new Error('Pardot API requires a User Key. Obtain this in your pardot account settings.');
  }

  if (!options.apiKey) {
    throw new Error('Please authenticate to obtain apiKey. http://developer.pardot.com/kb/api-version-3/authentication');
  }


  options.packageInfo = {
    "version" : "v2"
  };

  if (!options.version || options.version === 'v2') {
    return new PardotAPI_v3(options);
  } else {
    throw new Error('Version ' + options.version + ' of the Pardot API is currently not supported.');
  }

}

module.exports = PardotAPI;