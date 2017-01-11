module.exports = function() {
  return function getToken(hook) {
    hook.result = hook.app.get('stripe').secretKey;
    return hook;
  }
}
