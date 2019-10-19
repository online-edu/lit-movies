/**
 * Request service for network calls.
 */
export default {
  /**
   * Get request
   *
   * @param {string} url - network request url
   * @param {Object} request - request configuration
   */
  get(url, request = {}) {
    return fetch(url, request)
      .then(resp => Promise.resolve(resp.json()))
      .catch(err => Promise.reject(err));
  },
};
