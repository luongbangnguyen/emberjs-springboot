import Ember from 'ember';

export function activePanigatiionHelper(params/*, hash*/) {
  let number = Number(params[0]) + 1;
  let value = Number(params[1]);
  if(number === value){
  	return "hide";
  }
  return "";
}

export default Ember.Helper.helper(activePanigatiionHelper);
