const fetch = require('node-fetch');

module.exports = function(topic) {
  return function getNews(hook) {
    const baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    const query = `?api-key=${hook.app.get('nytimesAPI').key}&q=${topic}&page=${hook.params.query.page}&sort=newest`;
    const urlToFetch = baseUrl + query;
    return fetch(urlToFetch)
    .then(results => results.json())
    .then((response) => {
      hook.result = response.response.docs;
      return hook;
    })
    .catch(error => console.log(error));
  }
}
