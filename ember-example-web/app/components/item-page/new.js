import Ember from 'ember';

export default Ember.Component.extend({
	categoryService: Ember.inject.service('category-service'),
	listCategoryChosen: null,
	metaCategoryChosen: null,
	actions: {
		addNewItem: function(){
			this.sendAction('addNewItem');
		},
		updateItem: function(){
			this.sendAction('addNewItem');
		},
		closeItemUpdate: function(){
			this.sendAction('closeItemUpdate');
		},

		displayModalCategoryChosen: function(){
			this.send('binddingDataMetaForCategoriesChonse',0)
			this.$('#modal-categories-chosen').find(':checkbox').prop('checked', false);
			this.$('#modal-categories-chosen').modal('show');
		},
		gotoPageCategory: function(page, keyword){
			this.send('binddingDataMetaForCategoriesChonse',page, keyword);
		},
		binddingDataMetaForCategoriesChonse: function(page, keyword){
			this.get('categoryService').searchCategoryByName(keyword,page).then(data => {
				this.set('listCategoryChosen', data.categories);
				this.set('metaCategoryChosen',data.meta);
			});
		},
		chooseCategory: function(category){
			this.$('#modal-categories-chosen').modal('hide');
			this.sendAction('getNewRecordCategory', category, result => {
				this.set('itemObject.category', result);
			});
		}
		
	}
});
