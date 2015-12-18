import Ember from 'ember';

export function forwardPage(params/*, hash*/) {
	return params[0] + 2;
}

export default Ember.Helper.helper(forwardPage);
