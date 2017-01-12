const fetch = require('node-fetch');

module.exports = function() {
  return function getNews(hook) {
    const { clientID, clientSecret } = hook.app.get('facebook');
    const { nextPage, fromOrganization } = hook.params.query;
    const pageId = fromOrganization ? '102800004322' : '1321206437901011';
    const baseUrl = 'https://graph.facebook.com';
    const endpoint = `${pageId}/posts`;
    const accessToken = `access_token=${clientID}|${clientSecret}`;
    const fields = 'message,created_time,link,picture,permalink_url';
    const urlToFetch = nextPage || `${baseUrl}/${endpoint}?${accessToken}&fields=${fields}`;
    return fetch(urlToFetch, { method: 'GET' })
    .then(results => results.json())
    .then((response) => {
      hook.result = response;
      return hook;
    })
    .catch(error => console.log(error));
  }
}
