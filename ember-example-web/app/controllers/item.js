import Ember from 'ember';

export default Ember.Controller.extend({
	itemNewObject: null,
	flash: "success",
	textAlert: "",
	actions: {
		createNewItem: function(){
			this.set('itemNewObject', this.store.createRecord('item'));
			$("#modal-item-new").modal('show');
		},
		closeModalAfterAddNewItem: function(){
			$("#modal-item-new").modal('hide');
			$("#modal-update-item").modal('hide');
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
		getNewRecordCategory: function(category,callback){

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
		},
		getNewRecordCategoryUpdate: function(category, callback){
			this.send('getNewRecordCategory', category, callback);
		}
	}
});
