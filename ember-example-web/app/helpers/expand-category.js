import Ember from 'ember';

export function expandCategory(params/*, hash*/) {
	if(params[0] == params[1]){
		return 'active';
	}

	return '';
}

export default Ember.Helper.helper(expandCategory);
