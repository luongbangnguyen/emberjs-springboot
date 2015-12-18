import Ember from 'ember';

export default Ember.Controller.extend({
	categoryObject : null,
	itemObject: null,
	listItem: [],
	flash: "success",
	textAlert: "",
	title: "Create new category",
	actions: {
		createNewCategory: function(){
			var category = this.store.createRecord('category');
			this.set('title',"Create new category");
			this.set('categoryObject', category);
			this.set('itemObject', null);
			this.set('listItem',[]);
			$('#modal-category-new').modal('show');
		},
		createItem: function(){
			let item = this.store.createRecord('item');
			this.set('itemObject', item);
		},

		addNewItem: function(){
			
			let item = this.get('itemObject');
			item.set('category',this.get('categoryObject'));
			let listItem = this.get('listItem');
			listItem.pushObject(item);
			this.send('doRefresh');
		},

		doRefresh: function(){
			this.get('target.router').refresh();
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
		getNewRecordCategoryUpdate: function(category, callback){
			var store = this.store.peekRecord('category', category.id);
			if(store){
				return callback(store);
			}
			
			var record = this.store.createRecord('category',{
				id: category.id,
				createDate: category.createDate,
				updateDate: category.updateDate,
				name: category.name
			});
			callback(record);
		}

	}
});