import Ember from 'ember';

export default Ember.Component.extend({
	itemService : Ember.inject.service('item-service'),
	categoryObjectUpdate: null,
	itemObjectUpdate: null,
	meta: null,
	//list item user want change for each category
	listItemUpdating: [],
	listItemUpdate: [],
	categoryClone: null,
	indexCategory: -1,
	readOnly: false,
	categoryDeleted: null,
	actions: {
		update: function(categoryUpdate, indexCategory){
			this.set('readOnly', false);
			this.set('title',"Update category");
			this.send('callNewCategoryModel', categoryUpdate, indexCategory);
		},
		updateCategory: function(){
			this.$('#modal-category-update').modal('hide');
			this.sendAction('updateCategory',
				this.get('categoryObjectUpdate'),
				this.get('listItemUpdating'));
		},
		viewCategory: function(category, index){
			this.set('title', 'View category');
			this.set('readOnly', true);
			this.send('callNewCategoryModel', category, index);
		},
		deleteCategory: function(category){
			this.set('categoryDeleted', category);
			this.$('#modal-delete-category').modal('show');
		},
		deleteConfirm: function(){
			this.$('#modal-delete-category').modal('hide');
			this.sendAction('deleteConfirm', this.get('categoryDeleted'));
		},
		initDataUpdate: function(categoryUpdate,page, callback){
			categoryUpdate.copy().then(data => {
				this.set('categoryClone', data);
			});

			this.get('itemService').getItemsByCategoryId(categoryUpdate.get('id'), page).then(items => {
				this.set('listItemUpdate', items.items);
				this.set('meta', items.meta);
				this.set('categoryObjectUpdate', categoryUpdate);
				callback(items);
			});
		},
		callNewCategoryModel: function(category, indexCategory){
			var self = this;
			this.set('indexCategory', indexCategory);
			this.send('initDataUpdate',category,0,function(){
				self.$('#modal-category-update').modal('show');
			});
		},
		//set item to list item upudating 
		updateItem: function(item){
			if(this.get('listItemUpdating').contains(item)){
				return;
			}
			this.get('listItemUpdating').pushObject(item);
		},
		closeModalUpdate: function(){
			let index = this.get('indexCategory');
			if(index === -1){
				return;
			}
			this.get('model').objectAt(index).set('name', this.get('categoryClone.name'));
		},
		getNewRecordCategoryUpdate: function( category, callBack){
			this.sendAction('getNewRecordCategoryUpdate', category, callBack);
		}
	}
});
