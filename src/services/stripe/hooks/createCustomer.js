const stripe = require('stripe');

module.exports = function() {
  return function chargeCard(hook) {
    const stripeKey = hook.app.get('stripe').secretKey;
    const client = stripe(stripeKey);
    const { user } = hook.params;
    if (!user.stripeId) {
      return client.customers.create({
        description: user.facebook.profile.displayName,
        source: hook.data.stripeToken.id
      })
      .then(customer => {
        hook.result = Object.assign({}, { customer });
        return hook.app.service('users').patch(user._id, { stripeId: customer.id });
      })
      .then(() => hook)
      .catch(error => console.log(error));
    }
    return client.customers.update(user.stripeId, {
      source: hook.data.stripeToken.id,
    })
    .then(customer => {
      hook.result = Object.assign({}, { customer });
      return hook;
    })
    .catch(error => console.log(error));
  }
}
