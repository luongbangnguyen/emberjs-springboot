import Ember from 'ember';

export default Ember.Component.extend({
	itemService : Ember.inject.service('item-service'),
	msCreateCategorySuceess: "Create categroy success !",
	msUpdateCategorySuceess: "Update category success !",
	textAlert: "Item created successfull !",
	flash: "success",
	actions: {
		addItem: function() {
			this.get('itemService').getNewItem().then(data => {
				this.set('itemObject', data.item);
			});
			this.$('#modal-item-new').modal('show');
		},
		saveCategory: function(){
			this.$('#modal-category-new').modal('hide');
			this.sendAction('saveCategory');
			this.sendAction('alertMessage', this.get('msCreateCategorySuceess'));
		},
		addNewItem: function(){
			this.$('#modal-item-new').modal('hide');
			var category = {
				id: this.get('categoryObject.id'),
				createDate: this.get('categoryObject.createDate'),
				name: this.get('categoryObject.name'),
				update: this.get('categoryObject.update')
			}
			this.set('itemObject.category',category);
			this.get('itemService').saveNewItem(this.get('itemObject')).then( () =>{
				this.send('gotoPage', 0);
				this.send('alertMessage', this.get('textAlert'));
			});
		},
		deleteItem: function(){
			this.send('gotoPage',this.get('meta.number'));
			this.send('alertMessage', 'Delete item successfull !');
		},
		gotoPage: function(page){
			var itemService = this.get('itemService');
			itemService.getItemsByCategoryId(this.get('categoryObject.id'), page).then(data => {
				this.set('listItem', data.items);
				this.set('meta',data.meta);
			});
		},
		updateItem: function(items){
			this.sendAction('updateItem', items);
		},
		closeModalUpdate: function(){
			this.sendAction('close');
		},
		updateCategory: function(){
			this.sendAction('saveCategory');
		},
		alertMessage: function(message){
			this.set('flash', 'success')
			this.send('messagePopup', message);
		},
		alertMessageError: function(message){
			this.set('flash', 'danger')
			this.send('messagePopup', message);
		},
		messagePopup: function(message){

			this.set('textAlert',message);
			$('.alert').show();

			 Ember.run.later(function() {
		        $('.alert').hide();
		     }, 1500);
		},
		getNewRecordCategoryUpdate: function( category, callBack){
			this.sendAction('getNewRecordCategoryUpdate', category, callBack);
		}
	}
});
