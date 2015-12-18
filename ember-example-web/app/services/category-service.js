import Ember from 'ember';

export default Ember.Service.extend({
	ajax : Ember.inject.service(),
	searchCategoryByName(name = '',page = 0){
		return this.get('ajax').request('categories?keyword='+encodeURIComponent(name)+'&page='+page);
	}
});
