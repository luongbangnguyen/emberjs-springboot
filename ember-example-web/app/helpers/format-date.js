import Ember from 'ember';

export function formatDate(params) {
	let date = params[0];
	let format = params[1];
  	return moment(date).format(format);
}

export default Ember.Helper.helper(formatDate);
