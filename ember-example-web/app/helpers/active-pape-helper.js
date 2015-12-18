import Ember from 'ember';

export function activePapeHelper(params/*, hash*/) {
	let number = Number(params[0]+1);
	let value = Number(params[1]);
	if(value === number){
		return "active"
	}
  return "";
}

export default Ember.Helper.helper(activePapeHelper);
