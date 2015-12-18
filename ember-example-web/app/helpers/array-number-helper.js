import Ember from 'ember';

export function arrayNumberHelper(params/*, hash*/) {
	let number = params[0] + 1;
	let total_page = params[1];

	let pages_display = 5;
	let begin = 1;
	let last = pages_display;

	if(total_page <= pages_display){
		return createArray(begin, total_page);
	}

	let times = parseInt((number) / pages_display, 10);

	if(pages_display * times === number){
		begin = number - (pages_display - 1);
		last = number;
		return createArray(begin, last);
	}

	if(pages_display * times + pages_display > total_page){
		begin = pages_display * times + 1;
		last =  begin + (total_page - begin);
		return createArray(begin, last);
	}


	begin = pages_display * times + 1;
	last = (begin + pages_display - 1);
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
