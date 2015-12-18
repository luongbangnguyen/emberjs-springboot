import Ember from 'ember';

export function orderNumberPlusOne(params) {
	let order = Number(params[0]);
	return order + 1;
}

export default Ember.Helper.helper(orderNumberPlusOne);
