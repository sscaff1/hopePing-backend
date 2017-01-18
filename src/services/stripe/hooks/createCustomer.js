const stripe = require('stripe');

module.exports = function() {
  return function chargeCard(hook) {
    const stripeKey = hook.app.get('stripe').secretKey;
    const client = stripe(stripeKey);
    const { user } = hook.params;
    if (!user.stripeId) {
      return client.customers.create({
        description: user.profile.displayName,
        source: hook.data.stripeToken.id
      })
      .then(customer => {
        hook.app.services('user').patch(user._id, { stripeId: customer.id });
        hook.result = Object.assign({}, { customer });
        return hook;
      })
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
