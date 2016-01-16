import Ember from 'ember';

export function arrayNumberHelper(params/*, hash*/) {
	let number = params[0] + 1;
	let total_page = params[1];

	let pages_display = 5;
	let cal = pages_display * parseInt(number / pages_display);
	let begin = cal + 1;
	let last = begin + (pages_display - 1) > total_page ? total_page : begin + (pages_display - 1);
	return createArray(begin, last);
}

function createArray(begin, last){
	let array = [];
	for(let i=begin; i <= last; i++){
		array.push(i);
	}
	return array;
}

export default Ember.Helper.helper(arrayNumberHelper);
