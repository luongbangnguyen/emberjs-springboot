import Ember from 'ember';

export function orderNumberFlowPage(params/*, hash*/) {
	let order = Number(params[0]);
	let page = Number(params[1]) || 0;
  return (order + 1) + page*10;
}

export default Ember.Helper.helper(orderNumberFlowPage);
