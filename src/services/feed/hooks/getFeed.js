const fetch = require('node-fetch');

module.exports = function(pageId) {
  return function getNews(hook) {
    const { clientID, clientSecret } = hook.app.get('facebook');
    const baseUrl = 'https://graph.facebook.com';
    const endpoint = `${pageId}/posts`;
    const accessToken = `access_token=${clientID}|${clientSecret}`;
    const fields = 'message,created_time,link,picture,permalink_url';
    const urlToFetch = hook.params.query.nextPage || `${baseUrl}/${endpoint}?${accessToken}&fields=${fields}`;
    return fetch(urlToFetch, { method: 'GET' })
    .then(results => results.json())
    .then((response) => {
      hook.result = response;
      return hook;
    })
    .catch(error => console.log(error));
  }
}
