const stripe = require('stripe');

module.exports = function() {
  return function chargeCard(hook) {
    const stripeKey = hook.app.get('stripe').secretKey;
    const client = stripe(stripeKey);
    return client.charges.create({
      customer: hook.result.customer.id,
      currency: 'usd',
      amount: hook.data.chargeAmount,
    })
    .then(charge => {
      hook.result.charge = charge;
      return hook;
    })
    .catch(error => console.log(error));
  }
}
