import Ember from 'ember';

export function determineCategoryChosen(params/*, hash*/) {
	var id = params[0];
	var category = params[1];

	if(!categoryChosen || !category || !categoryChosen.get('id') || !category.id){
		return "";
	}

	if(categoryChosen.get('id') === category.id){
		return 'checked';
	}

	return '';
}

export default Ember.Helper.helper(determineCategoryChosen);
