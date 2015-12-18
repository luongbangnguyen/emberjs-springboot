import Ember from 'ember';

export default Ember.Component.extend({
	itemService : Ember.inject.service('item-service'),
	actions:{
		getItems: function(categoryId){
			this.sendAction('getItems', categoryId);
		},
		gotoPageCategory: function(page){
			this.sendAction('gotoPageCategory', page);
		},
		gotoPageItem: function(page){
			this.sendAction('gotoPageItem', page);
		}
	}
});
