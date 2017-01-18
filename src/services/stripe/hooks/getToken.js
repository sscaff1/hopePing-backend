module.exports = function() {
  return function getToken(hook) {
    hook.result = hook.app.get('stripe').publishKey;
    return Promise.resolve(hook);
  }
}
